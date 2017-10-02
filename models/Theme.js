var keystone = require('twreporter-keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Theme = new keystone.List('Theme', {
  autokey: { path: 'slug', from: 'name', unique: true },
  track: true,
  defaultSort: '-updatedAt',
});

Theme.add({
  name: { label: '主題(Theme)', type: String, required: true },
  title_position: { label: '標題位置', type: Types.TitlePosition, options: 'title-above, title-upon-left', default: 'title-above' },
  header_position: {
    label: 'Header位置',
    type: Types.TitlePosition,
    options: 'header-above, header-upon',
    default: 'header-above',
    dependsOn: {
      '$or': {
        title_position: ['title-upon-left']
      }
    }
  },
  title_color: { label: '標題顏色', type: Types.Color, default: '#404040' },
  subtitle_color: { label: '副標顏色', type: Types.Color, default: '#404040' },
  topic_color: { label: '專題顏色', type: Types.Color, default: '#c71b0a' },
  font_color: { label: '文字顏色', type: Types.Color, default: '#404040' },
  bg_color: { label: '背景色', type: Types.Color, default: '#f1f1f1' },
  footer_bg_color: { label: 'footer 顏色', types.Color, default: '#cdcdcd'},
  logo_color: { label: 'logo 顏色', type: Types.Select, options: 'dark, bright', default: 'dark' }
});

Theme.relationship({ ref: 'Post', refPath: 'theme' });

transform.toJSON(Theme);
Theme.register();
