'use strict';

// Offline deployment checks: execute the actual YAML steps with a fake gcloud.
const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');
const yaml = require('js-yaml');
const root = path.resolve(__dirname, '..');
const config = yaml.safeLoad(fs.readFileSync(path.join(root, 'cloudbuild.yaml'), 'utf8'));
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'plate-cloud-build-'));
const log = path.join(temp, 'calls.jsonl');
const digest = 'sha256:' + 'a'.repeat(64);
const project = 'coastal-run-106202';
const commit = 'b'.repeat(40);
const buildId = '12345678-1234-1234-1234-123456789abc';

// Model Cloud Build built-ins and $$ escaping; reject unexpected substitutions.
function substitute(value, builtins) {
  return value.replace(/\$\$|\$\{([^}]+)\}|\$([A-Za-z_][A-Za-z0-9_]*)/g, (token, braced, bare) => {
    if (token === '$$') return '$';
    const name = braced || bare;
    assert(Object.prototype.hasOwnProperty.call(builtins, name), 'Unexpected substitution: ' + name);
    return builtins[name];
  });
}

function run(stepId, branch, overrides, cwd) {
  const builtins = { PROJECT_ID: project, BRANCH_NAME: branch, COMMIT_SHA: commit, BUILD_ID: buildId };
  const env = { PATH: temp + path.delimiter + process.env.PATH, CALL_LOG: log, FAKE_DIGEST: digest };
  config.options.env.forEach(entry => {
    const setting = substitute(entry, builtins);
    const separator = setting.indexOf('=');
    env[setting.slice(0, separator)] = setting.slice(separator + 1);
  });
  Object.assign(env, overrides);
  const step = config.steps.find(entry => entry.id === stepId);
  assert.strictEqual(step.entrypoint, 'bash');
  // Local shell profiles must not replace PATH and bypass the fake gcloud.
  return spawnSync('/bin/bash', ['--noprofile', '--norc'].concat(step.args.map(arg => substitute(arg, builtins))), {
    cwd: cwd || root, env, encoding: 'utf8', timeout: 10000,
  });
}

function calls() {
  return fs.readFileSync(log, 'utf8').trim().split('\n').filter(Boolean).map(line => JSON.parse(line));
}

try {
  fs.writeFileSync(path.join(temp, 'gcloud'), `#!${process.execPath}
const fs = require('fs');
const args = process.argv.slice(2);
fs.appendFileSync(process.env.CALL_LOG, JSON.stringify(args) + '\\n');
if (args.slice(0, 4).join(' ') === 'artifacts docker images describe') {
  console.log(process.env.FAKE_DIGEST);
} else if (args.slice(0, 2).join(' ') === 'run deploy') {
  if (args.includes('--no-traffic')) process.exit(1);
  if (process.env.FAIL_DEPLOY) process.exit(1);
} else {
  process.exit(1);
}
`, { mode: 0o755 });
  assert.strictEqual(config.substitutions, undefined);
  for (const branch of ['staging', 'prod']) {
    fs.writeFileSync(log, '');
    const validation = run('validate', branch);
    assert.strictEqual(validation.status, 0, validation.stderr);
    assert.deepStrictEqual(calls(), [], 'Validation must not contact GCP');
    const deployment = run('deploy', branch);
    assert.strictEqual(deployment.status, 0, deployment.stderr);
    const recorded = calls();
    assert.strictEqual(recorded.length, 2);
    const deploy = recorded[1];
    const service = branch + '-keystone3-plate';
    const runtime = branch === 'staging' ? 'nonprod' : 'prod';
    const envFile = 'deploy/env.' + branch + '.public.yaml';
    assert.deepStrictEqual(deploy.slice(0, 3), ['run', 'deploy', service]);
    [
      '--env-vars-file=' + envFile,
      '--set-secrets=KEYSTONE_MONGODB=' + service + '_mongodb-uri:latest,KEYSTONE_COOKIE_SECRET=' + service + '_cookie-secret:latest',
      '--service-account=sa-keystone3-' + runtime + '-runtime@' + project + '.iam.gserviceaccount.com',
      '--image=asia-east1-docker.pkg.dev/' + project + '/cloud-run-source-deploy/keystone3-plate@' + digest,
      '--revision-suffix=b' + buildId,
    ].forEach(arg => assert(deploy.includes(arg), 'Missing deploy argument: ' + arg));
    assert(!deploy.includes('--no-traffic'), 'Deploy must allow immediate traffic');
    const settings = yaml.safeLoad(fs.readFileSync(path.join(root, envFile), 'utf8'));
    const bucket = (branch === 'staging' ? 'staging-' : '') + 'twreporter-multimedia';
    assert.strictEqual(Object.keys(settings).length, 7);
    assert.strictEqual(settings.KEYSTONE_GCS_PROJECT_ID, project);
    for (const kind of ['AUDIO', 'VIDEO', 'RAW_PHOTO', 'RESIZE_IMAGE', 'AVATAR']) {
      assert.strictEqual(settings['KEYSTONE_GCS_' + kind + '_BUCKET'], bucket);
    }
    assert.strictEqual(settings.KEYSTONE_PUBSUB_RESIZE_IMAGE_TOPIC, 'projects/' + project + '/topics/resize-image');
    assert.notStrictEqual(run('validate', branch, {}, temp).status, 0, 'Missing env file must fail');
  }
  for (const branch of ['release', 'develop', '']) {
    assert.notStrictEqual(run('validate', branch).status, 0);
  }
  for (const overrides of [{ BUILD_PROJECT: 'wrong' }, { BUILD_COMMIT: '' }, { BUILD_RUN_ID: '' }]) {
    assert.notStrictEqual(run('validate', 'staging', overrides).status, 0);
  }
  for (const overrides of [{ FAKE_DIGEST: 'invalid' }, { FAIL_DEPLOY: '1' }]) {
    fs.writeFileSync(log, '');
    assert.notStrictEqual(run('deploy', 'staging', overrides).status, 0);
    assert.strictEqual(calls().length, overrides.FAIL_DEPLOY ? 2 : 1);
    assert(!calls().some(args => args[2] === 'update-traffic'), 'Failed deployment must not promote traffic');
  }
  console.log('Cloud Build checks passed: staging/prod validation, env files, secrets, runtime identity, immediate deployment, and failure handling.');
} finally {
  fs.readdirSync(temp).forEach(file => fs.unlinkSync(path.join(temp, file)));
  fs.rmdirSync(temp);
}
