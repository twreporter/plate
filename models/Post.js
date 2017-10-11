var keystone = require('@twreporter/keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Post = new keystone.List('Post', {
	autokey: { path: 'slug', from: 'name', unique: true },
	track: true,
	defaultSort: '-publishedDate',
});

Post.add({
  name: { label: '網址名稱（英文）', type: String, required: true },
  title: { label: '標題', type: String, require: true, default: 'untitled' },
  subtitle: { label: '副標', type: String, require: false },
  state: { label: '狀態', type: Types.Select, options: 'draft, published, scheduled, archived', default: 'draft', index: true },
  publishedDate: { label: '發佈日期', type: Types.Date, index: true, utc: true, default: Date.now, dependsOn: { '$or': { state: [ 'published', 'scheduled' ] } }},
  writters: { label: '作者', type: Types.Relationship, ref: 'Contact', many: true },
  photographers: { label: '攝影', type: Types.Relationship, ref: 'Contact', many: true },
  designers: { label: '設計', type: Types.Relationship, ref: 'Contact', many: true },
  engineers: { label: '工程', type: Types.Relationship, ref: 'Contact', many: true },
  extend_byline: { label: '作者（其他）', type: String, require: false },
  leading_video: { label: '置頂影片', type: Types.Relationship, ref: 'Video'},
  heroImage: { label: '首圖', type: Types.ImageRelationship, ref: 'Image' },
  heroImageSize: { label: '首圖尺寸', type: Types.Select, options: 'extend, normal, small', default: 'normal', dependsOn: { heroImage: {'$regex': '.+/i'}}},
  leading_image_portrait: { label: '首圖（Portrait）', type: Types.ImageRelationship, ref: 'Image'},
  leading_image_description: { label: '首圖圖說', type: String, require: false },
  brief: { label: '前言', type: Types.Html, wysiwyg: true, height: 150 },
  content: { label: '內文', type: Types.Html, wysiwyg: true, height: 400 },
  categories: { label: '分類', type: Types.Relationship, ref: 'PostCategory', many: true },
  style: { label: '文章樣式', type: Types.Select, options: 'article, review, photography, interactive, longform', default: 'article', index: true },
  theme: { label: '文章主題樣式', type: Types.Relationship, ref: 'Theme' },
  topics: { label: '專題', type: Types.Relationship, ref: 'Topic' },
  topics_ref: { type: Types.Relationship, ref: 'Topic', hidden: true },
  copyright: { label: '版權使用', type: Types.Select, options: 'Creative-Commons, Copyrighted', default: 'Copyrighted', index: true },
  tags: { label: '標籤', type: Types.Relationship, ref: 'Tag', many: true },
  relateds: { label: '相關文章', type: Types.Relationship, ref: 'Post', many: true },
  og_title: { label: '分享標題', type: String, require: false},
  og_description: { label: '分享說明', type: String, require: false},
  og_image: { label: '分享縮圖', type: Types.ImageRelationship, ref: 'Image' },
  is_external: { label: '另開新頁', type: Boolean, index: true },
  isFeatured: { label: '置頂', type: Boolean, index: true },
  preview: { type: Types.Preview },
});

Post.relationship({ ref: 'Post', refPath: 'relateds' });

Post.schema.virtual('content.full').get(() => {
	return this.content.extended || this.content.brief;
});

transform.toJSON(Post);
Post.defaultColumns = 'title, name, state|20%, author|20%, categories|20%, publishedDate|20%, preview|20%';
Post.schema.pre('save', function(next) {
    if (this.topics) {
        this.topics_ref = this.topics
    }
    next();
});
Post.register();
