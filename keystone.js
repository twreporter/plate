var keystone = require('@twreporter/keystone');
var config = require('./config');
var buildSocketIO = require('@twreporter/keystone-plugin-socketio').buildSocketIO

keystone.init(config.options);
keystone.import('models');
keystone.set('locals', config.locals);
keystone.set('routes', require('./routes'));
keystone.set('nav', config.nav);

keystone.start({
  onMount () { console.log('Application Mounted'); },
  onStart () { console.log('Application Started'); },
});

var express = require('express');
var app = express();
var server = require('http').createServer(app);
buildSocketIO(server, {
  allowedOrigins: process.env.NODE_ENV === 'development' ? '*' : [
    'https://keystone-editor.twreporter.org',
    'https://test-keystone-editor.twreporter.org'
  ],
})
server.listen(process.env.SOCKETIO_PORT);