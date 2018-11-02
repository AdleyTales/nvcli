const qt = require('qrcode-terminal');
module.exports = function (url) {
    qt.generate(url, {
        small: true
    }, function (qrcode) {
        console.log(qrcode);
    });
}