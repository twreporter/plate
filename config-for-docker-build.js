exports.options = {
  'name': 'Keystone',
  'brand': 'Keystone',
  'less': 'public',
  'static': 'public',
  'favicon': 'public/favicon.ico',
  'views': 'templates/views',
  'view engine': 'jade',
  'mongo': process.env.KEYSTONE_MONGODB,
  'cloudinary config': 'cloudinary://333779167276662:_8jbSi9FB3sWYrfimcl8VKh34rI@keystone-demo',
  'auto update': true,
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': process.env.KEYSTONE_COOKIE_SECRET,
  'gcs config': {
    projectId: process.env.KEYSTONE_GCS_PROJECT_ID,
    keyFilename: __dirname + '/gcskeyfile.json',
    bucket: process.env.KEYSTONE_GCS_BUCKET,
  },
  'preview config': {
    protocol: 'http',
    host: 'twreporter-react', // Using host entries created by Docker in /etc/hosts
    port: 3000
  },
};

exports.locals = {
  env: process.env,
};

exports.nav = {
  'people': ['users', 'contacts'],
  'content': ['posts', 'post-categories', 'topics', 'images', 'audios', 'videos', 'tags'],
};
