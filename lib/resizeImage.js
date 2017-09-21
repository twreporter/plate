var gm = require('gm');
var get = require('lodash/get')

module.exports = function resize(image, width, height, options) {
  var filetype = get(options, 'filetype', '').toLowerCase()
  if (filetype.indexOf('gif') > -1) {
    var streamImg = gm(image).coalesce().stream()
    return gm(streamImg).resize(width, height, '>').stream()
  } else if (filetype.indexOf('png') > -1) {
    return gm(image).strip().resize(width, height, '>').stream();
  } else {
    return gm(image).resize(width, height, '>').stream();
  }
}
