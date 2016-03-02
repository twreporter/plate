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
        publicRead: true
    },
	tags: { type: Types.Relationship, ref: 'Tag', many: true },
});

transform.toJSON(Image);
Image.defaultColumns = 'image, tags';
Image.register();
