var keystone = require('@twreporter/keystone');
var config = require('./config');
var buildSocketIO = require('@twreporter/keystone-plugin-socketio').buildSocketIO

keystone.init(config.options);
keystone.import('models');
keystone.set('locals', config.locals);
keystone.set('routes', require('./routes'));
keystone.set('nav', config.nav);

var express = require('express');
var http = require('http');

// Create keystone app
keystone.initExpressApp();

var keystoneServer = http.createServer(keystone.app);

var shutdown = require('./lib/shutdown');
const healthCheckHandler = require('./lib/healthcheck')(keystone);

keystoneServer = shutdown.addGracefulShutdownHook(keystoneServer, {
	healthChecks: {
		'/healthcheck': healthCheckHandler,
	},
	onSignal: shutdown.cleanupKeystone(keystone),
	onShutdown: shutdown.logShutdownService('keystone'),
})

keystone.openDatabaseConnection(function(){
  var port = keystone.get('port') || 3000

  keystoneServer.listen(port, (err) => {
    console.log('------------------------------------------------')
    if (err) {
      console.error(err) // eslint-disable-line no-console
    }
    console.info('KeystoneJS ready on ', port, ' port') // eslint-disable-line no-console
    console.log('------------------------------------------------')
  })
});

// Create socket.io server
var app = express();
var server = http.createServer(app);
buildSocketIO(server, {
  allowedOrigins: process.env.NODE_ENV === 'development' ? '*' : [
    'https://keystone-editor.twreporter.org',
    'https://staging-keystone-editor.twreporter.org'
  ],
})

server = shutdown.addGracefulShutdownHook(server,{
  onShutdown: shutdown.logShutdownService('socket-io')
});
const socketioPort = process.env.SOCKETIO_PORT || 3030
server.listen(socketioPort, (err) => {
  console.log('------------------------------------------------')
  if (err) {
    console.error(err) // eslint-disable-line no-console
  }

  console.info('Keystone Plugin SocketIO is ready on ', socketioPort, ' port') // eslint-disable-line no-console
  console.log('------------------------------------------------')
});
