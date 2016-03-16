var keystone = require('keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Post = new keystone.List('Post', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Post.add({
	name: { type: String, required: true },
    title: { type: String, require: true },
    subtitle: { type: String, require: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	authors: { type: Types.Relationship, ref: 'Contact', many: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	heroImage: { type: Types.ImageRelationship, ref: 'Image' },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 }
	},
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
	tags: { type: Types.Relationship, ref: 'Tag', many: true },
});

Post.schema.virtual('content.full').get(() => {
	return this.content.extended || this.content.brief;
});

transform.toJSON(Post);
Post.defaultColumns = 'name, state|20%, author|20%, categories|20%, publishedDate|20%';
Post.register();
