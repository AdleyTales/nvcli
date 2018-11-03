const images = require('images');
const chalk = require('chalk');
const log = console.log;

const fn = function (path, options) {
    path = path.split(',');

    if (!path[1]) {
        log(chalk.red('缺少水印图片!'));
        return
    };

    const name = path[0].split('/').pop().split('.');
    const position = (options.position || '').split(',') || [];
    const result = `${name[0]}_watermark.${name[1]}`;

    images(path[0])
        .draw(images(path[1]), +(position[0] || 0), +(position[1] || 0))
        .save(result);

    log(chakl.green(`水印图：${result}`))
}

module.exports = fn;