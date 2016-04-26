var keystone = require('twreporter-keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Member = new keystone.List('Member');

Member.add({
    member_id: { type: String, required: true, index: true ,initial: false },
	email: { type: Types.Email, initial: true, required: true, index: true, unique: true },
	password: { type: Types.Password, initial: true, required: true },
    role: { type: Types.Select, options: 'basic, donate, vip', default: 'basic', required: true },
	country: { type: String, required: false },
	city: { type: String, required: false },
	address: { type: Types.Location, collapse: true },
    zip: { type: Types.Number },
    gender: { type: Types.Select, options: 'male, female, mid', default: 'mid', required: false },
});

transform.toJSON(Member);
Member.defaultColumns = 'member_id, email, role';
Member.register();
