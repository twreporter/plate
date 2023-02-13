var keystone = require('@twreporter/keystone');
var transform = require('model-transform');
const { Types } = keystone.Field

var Tag = new keystone.List('Tag', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Tag.add({
	name: { label: '標籤名稱', type: String, required: true },
	latest_order: {
          type: Types.Number,
          label: '最新頁的顯示順序',
          noedit: true,
          dependsOn: { $gt: { latest_order: 0} },
        },
});

Tag.relationship({ ref: 'Post', refPath: 'tags' });

transform.toJSON(Tag);
Tag.register();
