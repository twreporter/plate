var extractIPTC = require('../lib/extractIPTC');
var keystone = require('twreporter-keystone');
var resizeImage = require('../lib/resizeImage');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Image = new keystone.List('Image', {
    map: { name: 'description' }
});

Image.add({
    image: {
        type: Types.GcsImage,
        initial: true,
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
    },
    description: {
        type: String,
        index: true
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
