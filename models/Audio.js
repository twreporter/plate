var keystone = require('twreporter-keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Audio = new keystone.List('Audio', {
    map: { name: 'title' }
});

Audio.add({
    title: { type: String, required: true, initial: true },
    description: { type: String, required: true, initial: true },
    audio: {
        type: Types.GcsFile,
        initial: true,
        index: true,
        autoCleanup: true,
        datePrefix: 'YYYYMMDDHHmmss',
        // TODO move these settings to config
        bucket: 'twreporter-multimedia',
        destination: 'audios/',
        publicRead: true,
    },
    coverPhoto: { type: Types.ImageRelationship, ref: 'Image' },
    tags: {
        type: Types.Relationship,
        ref: 'Tag',
        many: true
    },
});


transform.toJSON(Audio);
Audio.defaultColumns = 'description, audio, tags';
Audio.register();
