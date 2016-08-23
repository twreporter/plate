var keystone = require('twreporter-keystone');
var transform = require('model-transform');

var Topic = new keystone.List('Topic', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Topic.add({
	name: { label: '專題名稱', type: String, required: true },
});

Topic.relationship({ ref: 'Post', refPath: 'topics' });

transform.toJSON(Topic);
Topic.register();
