var keystone = require('@twreporter/keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var PostReview = new keystone.List('Review', {
  searchFields: 'post_id',
  defaultSort: 'order',
});

// TODO: save editing history for viewing in keystone UI
PostReview.add({
  post_id: { label: '報導id', type: Types.Relationship, ref: 'Post', many: false },
  order: { label: '報導回顧順序', type: Number },
});
PostReview.relationship({ path: 'posts', ref: 'Post', refPath: 'post_id' });

transform.toJSON(PostReview);
PostReview.register();
