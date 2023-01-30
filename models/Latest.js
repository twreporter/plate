var keystone = require('@twreporter/keystone');
var transform = require('model-transform');

var Latest = new keystone.List('Latest', {
	autokey: { from: 'name', path: 'key', unique: true },
});

// TODO: save editing history for viewing in keystone UI
Latest.add({
	name: { label: '最新', type: String, required: true },
});

transform.toJSON(Latest);
Latest.register();
