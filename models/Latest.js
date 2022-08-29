var keystone = require('@twreporter/keystone');
var transform = require('model-transform');

const tagsCollectionName = 'tags';

var Latest = new keystone.List('Latest', {
	schema: {
		collection: keystone.prefixModel(tagsCollectionName),
		// Disable the autoIndex option in production
		// https://mongoosejs.com/docs/guide.html#autoIndex
		autoIndex: keystone.get('env') !== 'production',
	},
	autokey: { from: 'name', path: 'key', unique: true },
	sortable: true,
    nodelete: true,
});

Latest.add({
	name: { label: '最新', type: String, required: true },
});

transform.toJSON(Latest);
Latest.register();