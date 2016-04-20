var keystone = require('twreporter-keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Contact = new keystone.List('Contact');

Contact.add({
	name: { type: String, required: true, index: true },
	email: { type: Types.Email, initial: true, index: true, unique: true },
	image: { type: Types.CloudinaryImage },
	homepage: { type: Types.Url, index: false },
	facebook: { type: Types.Url, index: false },
	twitter: { type: Types.Url, index: false },
	instantgram: { type: Types.Url, index: true },
	address: { type: Types.Location, collapse: true },
	bio: { type: Types.Markdown, collapse: true },
});

transform.toJSON(Contact);
Contact.defaultColumns = 'name, email, favouriteFlavour, birthday, homepage';
Contact.register();
