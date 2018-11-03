#!/usr/bin/env node

const program = require('commander');

const options = [{
        key: '--ip',
        desc: '显示本地IP 例子: nvcli --ip',
        action: require('../utils/ip')
    },
    {
        key: '-p, --ipp [ip]',
        desc: '查询IP位置 例子: nvcli --ipp ',
        action: require('../utils/ip_position')
    },
    {
        key: '-g, --gzip <path>',
        desc: '压缩文件 例: nvcli --gzip input.txt,input.txt.gz',
        action: require('../utils/gzip')
    },
    {
        key: '-q, --qrcode <url>',
        desc: '网址转二维码 例: nvcli --qrcode http://bestvist.com',
        action: require('../utils/url2qrcode')
    },
    {
        key: '-o, --open <url>',
        desc: '打开文件或网址 例: nvcli --open http://bestvist.com',
        action: require('../utils/open')
    },
    {
        key: '-s, --search [keyword]',
        desc: '百度搜索 例: nvcli --search bestvist',
        action: require('../utils/search')
    },
    {
        key: '-t, --translate [keyword]',
        desc: '有道翻译 例: nvcli --translate awesome',
        action: require('../utils/translate')
    },
]

const commands = [{
        key: 'resize <path>',
        desc: '改变图像的宽高 例: nvcli resize input.jpg --size 50,50',
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