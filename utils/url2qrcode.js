const qt = require('qrcode-terminal');
const chalk = require('chalk');
const ora = require('ora');
const log = console.log;

const fn = function (url) {
    const spinner = ora('Loading generate').start();
    qt.generate(url, {
        small: true
    }, function (qrcode) {
        spinner.stop();
        log(chalk.hex('#4ac51d')(qrcode));
    });
}

module.exports = fn;