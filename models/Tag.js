var keystone = require('keystone');
var transform = require('model-transform');

var Tag = new keystone.List('Tag', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Tag.add({
	name: { type: String, required: true },
});

Tag.relationship({ ref: 'Post', refPath: 'tags' }, { ref: 'Image', refPath: 'tags'});

transform.toJSON(Tag);
Tag.register();
