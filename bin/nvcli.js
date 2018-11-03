#!/usr/bin/env node

const program = require('commander');

const options = [{
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
        key: '-s, --search [keyword]',
        desc: '浏览器打开网址 例: nvcli -s bestvist',
        action: require('../utils/search')
    },
    {
        key: '-t, --translate [keyword]',
        desc: '有道翻译 例: nvcli -t awesome',
        action: require('../utils/translate')
    },
]

const commands = [{
        key: 'resize <path>',
        desc: '设置图像的宽高 例: nvcli resize input.jpg --size 50,50',
        option: {
            key: '--size <w,h>',
            desc: '图像的宽高'
        },
        action: require('../utils/img_resize')
    },
    {
        key: 'watermark <path>',
        desc: '设置图片水印 例: nvcli watermark input.jpg --position 50,50',
        option: {
            key: '--position <x,y>',
            desc: '图像的坐标'
        },
        action: require('../utils/img_watermark')
    },
]

program.version('1.0.0', '-v, --version')
    .usage('[options] <args>')

options.map(opt => {
    program.option(opt.key, opt.desc, opt.action)
})

commands.map(cmd => {
    program.command(cmd.key)
        .description(cmd.desc)
        .option(cmd.option.key, cmd.option.desc)
        .action(cmd.action)
})

program.parse(process.argv);