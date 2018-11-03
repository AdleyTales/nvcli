const publicIp = require('public-ip');
const chalk = require('chalk');
const log = console.log;

const fn = function () {
    publicIp.v4().then(ip => {
        log(chalk.blue(ip));
    })
}

module.exports = fn;