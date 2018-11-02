const images = require('images');

module.exports = function (path) {
    images(path)
        .draw(images('logo.png'), 10, 10)
        .save('out.png')
}