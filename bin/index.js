#!/usr/bin/env node

const program = require('commander');

const options = [
    {
        command: '-g, --gzip <path>',
        desc: '压缩, 如: input.txt,input.txt.gz',
        action: require('../utils/gzip')
    },
]
program.version('1.0.0', '-v, --version')

options.map((opt) => {
    program.option(opt.command, opt.desc, opt.action)
})

program.parse(process.argv);