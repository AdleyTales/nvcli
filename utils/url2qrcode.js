const qt = require('qrcode-terminal');
const chalk = require('chalk');
const log = console.log;

const fn = function (url) {
    qt.generate(url, {
        small: true
    }, function (qrcode) {
        log(chalk.hex('#4ac51d')(qrcode));
    });
}

module.exports = fn;