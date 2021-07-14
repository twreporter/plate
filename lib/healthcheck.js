var _ = require('lodash')

/**
 * create the healthcheck handler
 *
 * @param {Object} keystone - keystone instance
 * @returns {function} - a healthcheck handler to check the health status of keystone(e.g. db connection)
 */
function createHealthCheckHandler(keystone){
  return async function(){
    var readyState = _.get(keystone, 'mongoose.connection.readyState', 0)
    // ERR_CONNECTING_TO_MONGO
    if (readyState === 0 || readyState === 3) {
      return Promise.reject(new Error('Mongoose has disconnected'))
    }
    // CONNECTING_TO_MONGO
    if (readyState === 2) {
    return Promise.reject(new Error('Mongoose is connecting'))
    }
    // CONNECTED_TO_MONGO
    return Promise.resolve()
  }
}

module.exports = createHealthCheckHandler;
