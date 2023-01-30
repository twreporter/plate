var keystone = require('@twreporter/keystone');
var transform = require('model-transform');

var Tag = new keystone.List('Tag', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Tag.add({
	name: { label: '標籤名稱', type: String, required: true },
	latest_order: { label: '最新(順序)', type: Number, noedit: true },
});

Tag.relationship({ ref: 'Post', refPath: 'tags' });

transform.toJSON(Tag);
Tag.register();
