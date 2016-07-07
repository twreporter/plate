var extractIPTC = require('../lib/extractIPTC');
var keystone = require('twreporter-keystone');
var resizeImage = require('../lib/resizeImage');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var ImageCollection = new keystone.List('ImageCollection', {
    map: { name: 'collectionName' }
});

ImageCollection.add({
    collectionName: {
      type: String, required: true, initial: true
    },
    images: {
        type: Types.GcsImages,
        autoCleanup: true,
        datePrefix: 'YYYYMMDDHHmmss',
        // TODO move these settings to config
        bucket: 'twreporter-multimedia',
        destination: 'images/',
        publicRead: true,
        resize: resizeImage,
        resizeOpts: [{
            target: 'desktop',
            width: 2000,
            height: null,
            options: {}
        }, {
            target: 'tablet',
            width: 1200,
            height: null,
            options: {}
        }, {
            target: 'mobile',
            width: 800,
            height: null,
            options: {}
        }, {
            target: 'tiny',
            width: 150,
            height: null,
            options: {}
        }],
        extractIPTC: extractIPTC
    }
});

transform.toJSON(ImageCollection);
ImageCollection.defaultColumns = 'collectionName, images';
ImageCollection.register();
