var keystone = require('@twreporter/keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Contact = new keystone.List('Contact', {
  track: true,
});

Contact.add({
	name: { label: '作者姓名', type: String, required: true, index: true },
	job_title: { label: '職稱', type: String },
	email: { type: Types.Email, initial: true, index: true },
	image: { label: '照片', type: Types.ImageRelationship, ref: 'Image' },
	bio: { label: '簡介', type: Types.Markdown, collapse: true },
});

Contact.relationship({ path: 'posts', ref: 'Post', refPath: 'writters' });
Contact.relationship({ path: 'photographs', ref: 'Post', refPath: 'photographers'})
Contact.relationship({ path: 'designs', ref: 'Post', refPath: 'designers'})
Contact.relationship({ path: 'engineers', ref: 'Post', refPath: 'engineers'})

transform.toJSON(Contact);
Contact.defaultColumns = 'name, email';
Contact.register();
