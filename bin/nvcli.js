#!/usr/bin/env node

const program = require('commander');

const options = [
    {
        key: '-i, --ip',
        desc: '显示本地IP 例子: nvcli -i',
        action: require('../utils/ip')
    },
    {
        key: '-g, --gzip <path>',
        desc: '压缩文件 例: nvcli -g input.txt,input.txt.gz',
        action: require('../utils/gzip')
    },
    {
        key: '-q, --qrcode <url>',
        desc: '网址转二维码 例: nvcli -q http://bestvist.com',
        action: require('../utils/url2qrcode')
    },
    {
        key: '-o, --open <url>',
        desc: '浏览器打开网址 例: nvcli -o http://bestvist.com',
        action: require('../utils/open')
    },
    {
        key: '-s, --search <keyword>',
        desc: '浏览器打开网址 例: nvcli -s node',
        action: require('../utils/search')
    },
]
program.version('1.0.0', '-v, --version')
    .usage('[options] <args>')

options.map((opt) => {
    program.option(opt.key, opt.desc, opt.action)
})

program.parse(process.argv);