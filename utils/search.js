const opn = require('opn');

module.exports = function (val){
    opn(`https://www.baidu.com/s?wd=${val}`);
}