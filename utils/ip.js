const publicIp = require('public-ip');
const chalk = require('chalk');

module.exports = function () {
    publicIp.v4().then(ip => {
        console.log(chalk.blue(ip));
    })
}