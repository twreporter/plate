var gm = require('gm');
module.exports = function resize(image, width, height, options) {
    return gm(image).resize(width, height, '>').stream();
}
