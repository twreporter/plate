var gm = require('gm');
var keystone = require('keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Image = new keystone.List('Image');

Image.add({
    image: {
        type: Types.GcsImage,
        initial: true,
        index: true,
        autoCleanup: true,
        datePrefix: 'YYYYMMDDHHmmss',
        bucket: 'twreporter-article.twreporter.org',
        destination: 'galleries/',
        publicRead: true,
        resize: function(image, width, height, options) {
            return gm(image).resize(width, height, '>').stream();
        },
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
        }]
    },
    photographer: {
        type: Types.Relationship,
        ref: 'Contact'
    },
    description: {
        type: String
    },
    tags: {
        type: Types.Relationship,
        ref: 'Tag',
        many: true
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
Image.defaultColumns = 'image, photographer, tags';
Image.register();
