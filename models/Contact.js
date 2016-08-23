var keystone = require('twreporter-keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Contact = new keystone.List('Contact');

Contact.add({
	name: { label: '作者姓名', type: String, required: true, index: true },
	email: { type: Types.Email, initial: true, index: true },
	image: { label: '照片', type: Types.ImageRelationship, ref: 'Image' },
	homepage: { label: '個人首頁', type: Types.Url, index: false },
	facebook: { type: Types.Url, index: false },
	twitter: { type: Types.Url, index: false },
	instantgram: { type: Types.Url, index: true },
	address: { type: Types.Location, collapse: true },
	bio: { label: '簡介', type: Types.Markdown, collapse: true },
});

Contact.relationship({ ref: 'Post', refPath: 'writters' });

transform.toJSON(Contact);
Contact.defaultColumns = 'name, email, favouriteFlavour, birthday, homepage';
Contact.register();
