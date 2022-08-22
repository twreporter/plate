var keystone = require('@twreporter/keystone');
var transform = require('model-transform');

var Latest = new keystone.List('Latest', {
	autokey: { from: 'name', path: 'key', unique: true },
	sortable: true,
});

Latest.add({
	name: { label: '最新', type: String, required: true },
});

// Latest.relationship({ ref: 'Post', refPath: 'latests' });

transform.toJSON(Latest);
Latest.register();