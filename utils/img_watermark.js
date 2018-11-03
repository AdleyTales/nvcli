const images = require('images');
const chalk = require('chalk');

module.exports = function (path, options) {
    path = path.split(',');

    if (!path[1]) {
        console.log(chalk.red('缺少水印图片!'));
        return
    };

    const name = path[0].split('/').pop().split('.');
    const position = (options.position || '').split(',') || [];

    images(path[0])
        .draw(images(path[1]), +(position[0] || 0), +(position[1] || 0))
        .save(`${name[0]}_watermark.${name[1]}`)
}