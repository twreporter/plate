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
	preFilter: { latest_order: { mode: 'gt', value: 0 }}, // TODO
});

Latest.add({
	name: { label: '最新', type: String, required: true },
	latest_order: { label: '最新(順序)', type: Number, noedit: true },
});

transform.toJSON(Latest);
Latest.register();