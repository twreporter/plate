'use strict';

// Exercise Keystone's actual production middleware without loading plate or MongoDB.
process.env.NODE_ENV = 'production';
process.env.KEYSTONE_DEV = 'false';
process.env.KEYSTONE_WRITE_BUNDLES = 'false';
process.env.KEYSTONE_WRITE_DISC = 'false';
var browserify = require('@twreporter/keystone/admin/server/middleware/browserify');
var entries = [
  ['fields.js', 'FieldTypes'],
  ['views/signin.js'],
  ['views/home.js'],
  ['views/item.js'],
  ['views/list.js'],
];

function check(entry) {
  return new Promise(function(resolve, reject) {
    var timer = setTimeout(function() {
      reject(new Error('Admin bundle failed or timed out: ' + entry[0]));
    }, 120000);
    browserify(entry[0], entry[1]).serve({}, {
      setHeader: function() {},
      send: function(bundle) {
        clearTimeout(timer);
        if (!bundle || !bundle.length) return reject(new Error('Empty bundle: ' + entry[0]));
        console.log('Compiled ' + entry[0] + ' (' + bundle.length + ' bytes)');
        resolve();
      },
    });
  });
}

entries.reduce(function(previous, entry) {
  return previous.then(function() { return check(entry); });
}, Promise.resolve()).catch(function(error) {
  console.error(error.message);
  process.exit(1);
});
