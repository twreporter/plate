var extractIPTC = require('../lib/extractIPTC');
var keystone = require('twreporter-keystone');
var resizeImage = require('../lib/resizeImage');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Image = new keystone.List('Image');

Image.add({
    image: {
        type: Types.GcsImage,
        initial: true,
        autoCleanup: true,
        datePrefix: 'YYYYMMDDHHmmss',
        // TODO move these settings to config
        bucket: 'twreporter-article.twreporter.org',
        destination: 'galleries/',
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
            width: 60,
            height: null,
            options: {}
        }],
        extractIPTC: extractIPTC
    },
    copyright: {
        type: Types.Select,
        options: 'Creative-Commons, Copyrighted',
        default: 'Copyrighted', index: true
    },
    tags: {
        type: Types.Relationship,
        ref: 'Tag',
        many: true
    },
    sale: {
        type: Boolean,
        index: true
    },
});

Image.relationship({
    ref: 'Post',
    refPath: 'heroImage'
}, {
    ref: 'Audio',
    refPath: 'heroImage'
});

transform.toJSON(Image);
Image.defaultColumns = 'images, tags';
Image.register();
