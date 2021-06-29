var createTerminus = require('@godaddy/terminus').createTerminus;
var _ = require('lodash');

/**
 * Clean up keystone server (e.g mongo connections) before shutdown
 *
 * @param {Object} keystone - keystone instance
 * @returns {function} - which creates promise for the disconnection of mongoose
 */
function cleanupKeystone(keystone){
	return async function(){
		console.log('keystone starting cleanup');
		return keystone.mongoose.disconnect(function(){
			console.log('mongoose closed');
		});
	};
}

/**
 * log the service closed information before shutdown
 *
 * @param {string} service - service name
 * @returns {function} - log the shutdown message
 */
function logShutdownService(service){
	return function(){
		console.log(`cleanup finished. ${service} server is shutting down`);
	}
}

/**
 * add the health check and shutdown hook for the http.server
 *
 * @param {Object} [server] - http server
 * @param {Object} [opts] - options to configure terminus
 * @returns {Object} - decorated http server
 */
function addGracefulShutdownHook(server, opts){
  var defaultOpts = {
    timout: process.env.KEYSTONE_SERVER_GRACEFUL_SHUTDOWN_PERIOD || 10 * 1000,
    signals: ['SIGINT', 'SIGTERM'],
    beforeShutdown: function(){
      // Set a buffer time so that either
      // 1. kubelet uses the readiness probe (fail) to mark the pod as unready
      // 2. kubelet notices the `terminating` status of Pod and send SIGTERM
      // Then, the endpoint controller of service will remove the pod from IP pool.
      // Therefore, no further requests will be forwarded to the removing pod.
      return new Promise((resolve) => {
        setTimeout(resolve, process.env.KEYSTONE_SERVER_BUFFER_PERIOD_BEFORE_SHUTDOWN || 1 * 1000)
      })
    }
  }

  var options = _.defaults({}, opts, defaultOpts);

  createTerminus(server, options);
  return server;
}

module.exports = {
	addGracefulShutdownHook,
	cleanupKeystone,
	logShutdownService,
};
