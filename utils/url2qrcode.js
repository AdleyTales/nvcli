const qt = require('qrcode-terminal');
const chalk = require('chalk');

module.exports = function (url) {
    qt.generate(url, {
        small: true
    }, function (qrcode) {
        console.log(chalk.hex('#4ac51d')(qrcode));
    });
}