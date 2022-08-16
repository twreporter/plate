var keystone = require('@twreporter/keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var PostCategory = new keystone.List('PostCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
	sortable: true,
});

PostCategory.add({
	name: { label: "名稱", type: String, required: true },
	subcategory: { label: '子分類', type: Types.Relationship, ref: 'Tag', many: true }
});

PostCategory.relationship({ ref: 'Post', refPath: 'categories' });

transform.toJSON(PostCategory);
PostCategory.register();
