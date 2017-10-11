var keystone = require('@twreporter/keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Topic = new keystone.List('Topic', {
  autokey: { path: 'slug', from: 'name', unique: true },
  track: true,
  defaultSort: '-publishedDate',
});

Topic.add({
  name: { label: '專題名稱（英文）', type: String, required: true },
  topic_name: { label: '專題名稱', type: String, required: true, initial: '報導者專題' },
  title: { label: '標題', type: String, required: true, default: 'untitled' },
  title_position: { label: '標題版型', type: Types.TitlePosition, options: 'center, bottom, bottom-left', default: 'center' },
  subtitle: { label: '副標題', type: String },
  headline: { label: '小標', type: String },
  state: { label: '狀態', type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
  publishedDate: { label: '發佈日期', type: Types.Date, index: true, utc: true, default: Date.now, dependsOn: { '$or': { state: [ 'published', 'scheduled' ] } }},
  description: { label: '簡介', type: Types.Html },
  team_description: { label: '製作人員名單', type: Types.Html },
  relateds: { label: '相關文章', type: Types.Relationship, ref: 'Post', many: true },
  relateds_format: { label: '相關文章版型', type: Types.RelatedsFormat, options: 'in-row, in-column', default:'in-row' },
  relateds_background: { label: '文章區背景色', type: Types.Color, default: '#d8d8d8' },
  leading_image: { label: '首圖', type: Types.ImageRelationship, ref: 'Image' },
  leading_image_portrait: { label: '首圖（Portrait）', type: Types.ImageRelationship, ref: 'Image'},
  leading_video: { label: '置頂影片', type: Types.Relationship, ref: 'Video' },
  og_title: { label: '分享標題', type: String, require: false},
  og_description: { label: '分享說明', type: String, require: false},
  og_image: { label: '分享縮圖', type: Types.ImageRelationship, ref: 'Image' },
});

Topic.relationship({ ref: 'Post', refPath: 'topics' });

transform.toJSON(Topic);
Topic.register();
