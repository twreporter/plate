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
  'session store': 'mongo',
  'auth': true,
  'user model': 'User',
  'cookie secret': process.env.KEYSTONE_COOKIE_SECRET,
  'gcs config': {
    projectId: process.env.KEYSTONE_GCS_PROJECT_ID,
    keyFilename: __dirname + '/gcskeyfile.json',
    bucket: {
      audio: process.env.KEYSTONE_GCS_AUDIO_BUCKET,
      video: process.env.KEYSTONE_GCS_VIDEO_BUCKET,
      rawPhoto: process.env.KEYSTONE_GCS_RAW_PHOTO_BUCKET,
      resizedImage: process.env.KEYSTONE_GCS_RESIZE_IMAGE_BUCKET
    },
  },
  'preview origin': process.env.KEYSTONE_PREVIEW_ORIGIN || 'https://keystone-preview.twreporter.org',
};

exports.locals = {
  env: process.env,
};

exports.nav = {
  'people': ['users', 'contacts'],
  'content': ['posts', 'post-categories', 'topics', 'images', 'audios', 'videos', 'tags'],
};
