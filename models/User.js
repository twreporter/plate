var keystone = require('@twreporter/keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;
var config = require('../config');

var User = new keystone.List('User');

const bucket = config['options']['gcs config']['bucket']['resizedImage'];

User.add({
	name: { type: String, required: true, index: true },
	secretEnabled: { type: Boolean, noedit: true, label: 'Two-Step Verification Enabled' },
	secretKey: { type: String, hidden: true, noedit: true },
	email: { type: Types.Email, initial: true, required: true, index: true, unique: true },
	password: { type: Types.Password, initial: true, required: true },
  avatar: { 
    type: Types.GcsAvatar,
    initial: true,
    datePrefix: 'YYYYMMDDHHmmss',
    bucket: bucket,
    destination: 'avatars',
    publicRead: true
  },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});

transform.toJSON(User);
User.defaultColumns = 'name, email, isAdmin';
User.register();
