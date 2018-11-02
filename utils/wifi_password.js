const wifiPwd = require('wifi-password');
const chalk = require('chalk');
wifiPwd().then(password => {
    console.log(chalk.red(password));
})