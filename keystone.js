var keystone = require('@twreporter/keystone');
var config = require('./config');

keystone.init(config.options);
keystone.import('models');
keystone.set('locals', config.locals);
keystone.set('routes', require('./routes'));
keystone.set('nav', config.nav);

var http = require('http');

// Reuse the item template's plugin script URL before static files are served.
var previousPreStatic = keystone.get('pre:static');
keystone.set('pre:static', function(app) {
  app.get('/keystone-plugin.bundle.js', function(req, res) {
    res.set('Cache-Control', 'no-cache');
    res.sendFile(require('path').join(__dirname, 'client/online-users.js'));
  });
  if (typeof previousPreStatic === 'function') previousPreStatic(app);
});

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
