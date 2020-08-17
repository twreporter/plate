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
    'https://staging-keystone-editor.twreporter.org'
  ],
})

const socketioPort = process.env.SOCKETIO_PORT || 3030
server.listen(socketioPort, (err) => {
  console.log('------------------------------------------------')
  if (err) {
    console.error(err) // eslint-disable-line no-console
  }

  console.info('Keystone Plugin SocketIO is ready on ', socketioPort, ' port') // eslint-disable-line no-console
  console.log('------------------------------------------------')
});
