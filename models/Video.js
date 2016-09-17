var config = require('../config');
var keystone = require('twreporter-keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Video = new keystone.List('Video', {
    map: { name: 'title' }
});
var bucket = config['options']['gcs config']['bucket']

Video.add({
    title: { type: String, required: true, initial: true },
    video: {
        type: Types.GcsFile,
        initial: true,
        autoCleanup: true,
        datePrefix: 'YYYYMMDDHHmmss',
        bucket: bucket,
        destination: 'videos/',
        publicRead: true,
    },
    tags: {
        type: Types.Relationship,
        ref: 'Tag',
        many: true
    },
});


transform.toJSON(Video);
Video.defaultColumns = 'title, video, tags';
Video.register();
