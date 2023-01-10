var keystone = require('@twreporter/keystone');
var transform = require('model-transform');

var Latest = new keystone.List('Latest', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Latest.add({
	name: { label: '最新', type: String, required: true },
	history: { label: '編輯紀錄', type: String, noedit: true },
});

transform.toJSON(Latest);
Latest.register();
