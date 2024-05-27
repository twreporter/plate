var keystone = require('@twreporter/keystone');
const { initial } = require('lodash');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var PostFollowup = new keystone.List('PostFollowup', {
    map: { name: 'title' },
    defaultSort: 'date'
});

PostFollowup.add({
    title: { label: '標題', type: String, require: true, default: '後續追蹤標題', initial: true },
    date: { label: '日期', type: Types.Date, index: true, default: Date.now },
    summary: { label: '摘要', type: String },
    content: { label: '內容', type: Types.Html, wysiwyg: true, height: 600, simple: true },
});

PostFollowup.relationship({ path: 'posts', ref: 'Post', refPath: 'followup' });

transform.toJSON(PostFollowup);
PostFollowup.defaultColumns = 'title, date'
PostFollowup.register();