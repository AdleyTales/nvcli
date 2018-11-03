const opn = require('opn');

const fn = function (val){
    opn(`https://www.baidu.com/s?wd=${val}`);
}

module.exports = fn;