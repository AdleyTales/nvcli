#!/usr/bin/env node

const program = require('commander');

const options = [
    {
        command: '-i, --ip',
        desc: '显示本地IP 例子: nvcli -i',
        action: require('../utils/ip')
    },
    {
        command: '-g, --gzip <path>',
        desc: '压缩文件 例: nvcli -g input.txt,input.txt.gz',
        action: require('../utils/gzip')
    },
    {
        command: '-q, --qrcode <url>',
        desc: '网址转二维码 例: nvcli -q http://bestvist.com',
        action: require('../utils/url2qrcode')
    },
    {
        command: '-o, --open <url>',
        desc: '浏览器打开网址 例: nvcli -o http://bestvist.com',
        action: require('../utils/open')
    },
]
program.version('1.0.0', '-v, --version')
    .usage('[options] <args>')

options.map((opt) => {
    program.option(opt.command, opt.desc, opt.action)
})

program.parse(process.argv);