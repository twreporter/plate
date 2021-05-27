// note the unit of session store options
// autoRemoveInterval: the interval of expired session removal. the unit of it is minute.
// touchAfter: the interval of unmodified session is refreshed. the unit of it is second.
// ttl: the interval of the session ttl on server side if the cookie-session does not contain maxAge/expire.
//      the unit of it is second.
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
  'session store options': {
    autoRemove: 'interval',
    autoRemoveInterval: process.env.KEYSTONE_SESSION_AUTO_REMOVE_INTERVAL || 10,
    touchAfter: process.env.KEYSTONE_SESSION_TOUCH_AFTER || 0,
    ttl: process.env.KEYSTONE_SESSION_TTL || 14 * 24 * 60 * 60,
  },
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
