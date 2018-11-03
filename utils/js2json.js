const jsonfile = require('jsonfile');
const chalk = require('chalk');
const log = console.log;

const fn = function (path) {
    const filename = 'js2json.json';
    const data = require(path);
    jsonfile.writeFile(filename, data, {
        spaces: 2,
        EOL: '\r\n'
    }, function (err) {
        if (err)
            log(err)
        else
            log(chalk.green(`转换成功：${filename}`))
    })
}

module.exports = fn;