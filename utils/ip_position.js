const geoip = require('geoip-lite');
const chalk = require('chalk');
const log = console.log;

const fn = function (ip) {
    log('\n');
    const position = geoip.lookup(ip);
    if (!position) {
        log(chalk.red('没有查到位置信息!'));
        return;
    }
    const result = `国家: ${position.country}\n\n城市: ${position.city}\n\n坐标: ${position.ll}`;
    log(chalk.green(result));
}
module.exports = fn;