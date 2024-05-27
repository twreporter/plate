// note the unit of session store options
// autoRemoveInterval: the interval of expired session removal. the unit of it is minute.
// touchAfter: the interval of unmodified session is refreshed. the unit of it is second.
// ttl: the interval of the session ttl on server side if the cookie-session does not contain maxAge/expire.
//      the unit of it is second.
// note the unit of cookie singin options
// maxAge: The maximumAge should a cookie be granted. The unit of it is millisecond.
//         This should be consistent with the ttl option of session store options in general.
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
  'session options': {
    key: 'keystone.sid',
  },
  'session store': 'mongo',
  'session store options': {
    autoRemove: 'interval',
    autoRemoveInterval: process.env.KEYSTONE_SESSION_AUTO_REMOVE_INTERVAL ? parseInt(process.env.KEYSTONE_SESSION_AUTO_REMOVE_INTERVAL, 10) : 10,
    touchAfter: process.env.KEYSTONE_SESSION_TOUCH_AFTER ? parseInt(process.env.KEYSTONE_SESSION_TOUCH_AFTER, 10) : 0,
    ttl: process.env.KEYSTONE_SESSION_TTL ? parseInt(process.env.KEYSTONE_SESSION_TTL, 10) : 14 * 24 * 60 * 60,
  },
  'signout url': '/signout',
  'auth': true,
  'user model': 'User',
  'cookie secret': process.env.KEYSTONE_COOKIE_SECRET,
  'cookie signin options': {
    maxAge: process.env.KEYSTONE_COOKIE_SIGNIN_MAX_AGE ? parseInt(process.env.KEYSTONE_COOKIE_SIGNIN_MAX_AGE, 10) : 14 * 24 * 60 * 60 * 1000,
  },
  'gcs config': {
    projectId: process.env.KEYSTONE_GCS_PROJECT_ID,
    keyFilename: __dirname + '/gcskeyfile.json',
    bucket: {
      audio: process.env.KEYSTONE_GCS_AUDIO_BUCKET,
      video: process.env.KEYSTONE_GCS_VIDEO_BUCKET,
      rawPhoto: process.env.KEYSTONE_GCS_RAW_PHOTO_BUCKET,
      resizedImage: process.env.KEYSTONE_GCS_RESIZE_IMAGE_BUCKET,
      avatar: process.env.KEYSTONE_GCS_AVATAR_BUCKET
    },
  },
  'preview origin': process.env.KEYSTONE_PREVIEW_ORIGIN || 'https://keystone-preview.twreporter.org',
};

exports.locals = {
  env: process.env,
};

exports.nav = {
  'people': ['users', 'contacts'],
  'content': ['posts', 'post-categories', 'post-followups', 'topics', 'images', 'audios', 'videos', 'tags', 'latests', 'reviews'],
};
