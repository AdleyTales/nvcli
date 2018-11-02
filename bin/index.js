#!/usr/bin/env node

const program = require('commander');

const options = [
    {
        command: '-g, --gzip <path>',
        desc: '压缩文件, 例:nvcli -g input.txt,input.txt.gz',
        action: require('../utils/gzip')
    },
    {
        command: '-q, --qrcode <url>',
        desc: '网址转二维码, 例:nvcli -uq http://bestvist.com',
        action: require('../utils/url2qrcode')
    },
]
program.version('1.0.0', '-v, --version')

options.map((opt) => {
    program.option(opt.command, opt.desc, opt.action)
})

program.parse(process.argv);