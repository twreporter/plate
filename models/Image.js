const {PubSub} = require('@google-cloud/pubsub');
const errors = require('@twreporter/errors').default;
var config = require('../config');
var extractIPTC = require('../lib/extractIPTC');
var keystone = require('@twreporter/keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Image = new keystone.List('Image', {
  map: { name: 'description' }
});

const bucket = config['options']['gcs config']['bucket'];

const resizedOpts = [['mobile', 800], ['desktop', 2000], ['tablet', 1200], ['w400', 400], ['tiny', 150]];

const outputBucket = process.env.KEYSTONE_PUBSUB_RESIZE_IMAGE_OUTPUT_BUCKET || 'twreporter-multimedia';
const topicName = process.env.KEYSTONE_PUBSUB_RESIZE_IMAGE_TOPIC || 'resize-image';
const resizeImageURLPrefix = process.env.KEYSTONE_RESIZE_IMAGE_URL_PREFIX || 'https://www.twreporter.org/images/'

/**
 *  Publish resize events through Google Cloud Pub/Sub.
 *
 *  @param {string} filename - uploaded file name
 *  @param {number|string} originWidth - width of original photo
 *  @param {string} desc - description of photo
 *  @returns {Promise} resolve with an array of message ids or reject with error
 */
function publishResizeTasks(filename, originWidth, desc) {
  const inputBucket = bucket;
  const pubSubClient = new PubSub()

  const promises = []

  resizedOpts.forEach((resizedOpt) => {
    let [resolution, resizeWidth] = resizedOpt;
    const promise = pubSubClient
      .topic(topicName)
      .publish(Buffer.from(filename), {
        input_bucket: inputBucket,
        output_bucket: outputBucket,
        target: resolution,
        resize_width: `${resizeWidth}`,
        original_width: `${originWidth}`,
        description: desc || filename,
      })
    promises.push(promise);
  })

  return Promise.all(promises);
}

/**
 *  Build resize metadata.
 *
 *  @param {string} filename - uploaded file name
 *  @param {number} originWidth - image width
 *  @param {number} originHeight - image height
 *  @returns {Object}
 */
function getResizeMetadata(filename, originWidth, originHeight) {
  const [filenameWithoutExt, ext] = filename.split('.');
  const targets = {};

  resizedOpts.forEach(resizedOpt => {
    let [resolution, resizeWidth] = resizedOpt;
    let resizeHeight = 0;

    if (resizeWidth < originWidth) {
      resizeHeight = Math.round((resizeWidth / originWidth) * originHeight);
    } else {
      resizeWidth = originWidth;
      resizeHeight = originHeight;
    }

    targets[resolution] = {
      url: `${resizeImageURLPrefix}${filenameWithoutExt}-${resolution}.${ext}`,
      width: resizeWidth,
      height: resizeHeight,
    };
  });

  return targets;
}

Image.set('notes', {
  image: '圖片上傳後，請前往 slack channel（`圖片處理系統回報`）看圖片壓縮結果。'
})

Image.add({
  image: {
    type: Types.GcsImage,
    initial: true,
    autoCleanup: true,
    datePrefix: 'YYYYMMDDHHmmss',
    bucket: bucket,
    destination: '',
    publicRead: false,
    hooks: {
      postUpload: async (imageData) => {
        if (typeof imageData !== 'object' || imageData === null) {
          return imageData;
        }

        const { filepath, filename, height, width } = imageData;

        if (typeof filename !== 'string' || filename === '') {
          return imageData;
        }

        try {
          const iptc = await extractIPTC(filepath);
          imageData.iptc = iptc;
        } catch (err) {
          throw errors.helpers.wrap(err, 'Error', 'Error to extract iptc from images.')
        }

        try {
          await publishResizeTasks(filename, width, imageData.iptc.caption);
        } catch (err) {
          throw errors.helpers.wrap(err, 'Error', 'Received error while publishing resize events.')
        }

        const resizedTargets = getResizeMetadata(filename, width, height);
        imageData.resizedTargets = resizedTargets;

        return imageData;
      }
    },
  },
  description: {
    type: String,
    required: true,
    index: true,
    initial: true,
  },
  copyright: {
    type: Types.Select,
    options: 'Creative-Commons, Copyrighted',
    default: 'Copyrighted', index: true
  },
  keywords: {
    type: String,
    index: true
  },
  sale: {
    type: Boolean,
    index: true
  },
});

Image.relationship({
  ref: 'Post',
  refPath: 'heroImage'
});

transform.toJSON(Image);
Image.defaultColumns = 'description, image';
Image.register();
