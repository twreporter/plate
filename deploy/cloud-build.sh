#!/usr/bin/env bash
set -euo pipefail

[[ "${BUILD_PROJECT:-}" == coastal-run-106202 ]] || { echo 'Unexpected project.' >&2; exit 1; }
case "${BUILD_ENV:-}" in
  staging) runtime_env=nonprod; subnet=asia-east1-cloud-run-nonprod; max_instances=1; gcs_bucket=staging-twreporter-multimedia ;;
  prod) runtime_env=prod; subnet=asia-east1-cloud-run-prod-services; max_instances=3; gcs_bucket=twreporter-multimedia ;;
  *) echo 'Only staging and prod branches can deploy.' >&2; exit 1 ;;
esac
[[ "${BUILD_COMMIT:-}" =~ ^[a-f0-9]{40}$ ]] || { echo 'Missing commit SHA.' >&2; exit 1; }
[[ "${BUILD_RUN_ID:-}" =~ ^[a-f0-9-]{36}$ ]] || { echo 'Missing build ID.' >&2; exit 1; }
for key in MONGODB_SECRET COOKIE_SECRET; do
  [[ "${!key:-}" =~ ^[a-zA-Z0-9_-]+:[1-9][0-9]*$ ]] || {
    echo "$key must specify a Secret Manager name and numeric version." >&2; exit 1;
  }
done
for key in KEYSTONE_GCS_PROJECT_ID; do
  [[ -n "${!key:-}" ]] || { echo "Missing $key." >&2; exit 1; }
done
case "${1:-}" in
  validate) exit 0 ;;
  deploy) ;;
  *) echo 'Usage: cloud-build.sh validate|deploy' >&2; exit 1 ;;
esac

region=asia-east1
service="${BUILD_ENV}-keystone3-plate"
image="${region}-docker.pkg.dev/${BUILD_PROJECT}/cloud-run-source-deploy/keystone3-plate"
tag="${BUILD_ENV}-${BUILD_COMMIT}-${BUILD_RUN_ID}"
digest="$(gcloud artifacts docker images describe "$image:$tag" --project="$BUILD_PROJECT" --format='value(image_summary.digest)')"
[[ "$digest" =~ ^sha256:[a-f0-9]{64}$ ]] || { echo 'Invalid image digest.' >&2; exit 1; }

# JSON is also a valid YAML env-vars file. Contains no credentials.
KEYSTONE_GCS_BUCKET="$gcs_bucket" python3 - <<'PY' > /workspace/plate-runtime-env.json
import json, os
keys = ['KEYSTONE_GCS_AUDIO_BUCKET', 'KEYSTONE_GCS_VIDEO_BUCKET',
        'KEYSTONE_GCS_RAW_PHOTO_BUCKET', 'KEYSTONE_GCS_RESIZE_IMAGE_BUCKET', 'KEYSTONE_GCS_AVATAR_BUCKET']
values = {key: os.environ['KEYSTONE_GCS_BUCKET'] for key in keys}
values['KEYSTONE_GCS_PROJECT_ID'] = os.environ['KEYSTONE_GCS_PROJECT_ID']
values['KEYSTONE_PUBSUB_RESIZE_IMAGE_TOPIC'] = 'projects/' + os.environ['BUILD_PROJECT'] + '/topics/resize-image'
print(json.dumps(values))
PY

revision_suffix="b${BUILD_RUN_ID}"
gcloud run deploy "$service" --project="$BUILD_PROJECT" --region="$region" \
  --image="$image@$digest" \
  --service-account="sa-keystone3-${runtime_env}-runtime@${BUILD_PROJECT}.iam.gserviceaccount.com" \
  --execution-environment=gen1 --cpu=1 --memory=512Mi --cpu-throttling \
  --concurrency=20 --min-instances=0 --max-instances="$max_instances" --port=3000 \
  --network=twreporter-custom-network --subnet="$subnet" --vpc-egress=private-ranges-only \
  --ingress=internal-and-cloud-load-balancing --allow-unauthenticated \
  --env-vars-file=/workspace/plate-runtime-env.json \
  --set-secrets="KEYSTONE_MONGODB=$MONGODB_SECRET,KEYSTONE_COOKIE_SECRET=$COOKIE_SECRET" \
  --revision-suffix="$revision_suffix" --no-traffic --quiet

gcloud run services update-traffic "$service" --project="$BUILD_PROJECT" --region="$region" \
  --to-revisions="${service}-${revision_suffix}=100" --quiet
