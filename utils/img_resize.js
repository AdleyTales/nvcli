const images = require('images');
const chalk = require('chalk');
const log = console.log;

const fn = function (path, options) {
    const name = path.split('/').pop().split('.');
    const size = (options.size || '').split(',') || [];
    const sizeStr = size[0] + (size[1] ? 'x' + size[1] : '') + '';
    const result = `${name[0]}_${sizeStr}.${name[1]}`;
    images(path)
        .size(+size[0], size[1] ? +size[1] : undefined)
        .save(result)

    log(chalk.green(`修改成功: ${result}`))
}

module.exports = fn;