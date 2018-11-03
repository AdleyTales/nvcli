const opn = require('opn');

const fn = function (url) {
    opn(url);
}

module.exports = fn;