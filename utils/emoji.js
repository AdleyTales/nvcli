const http = require('request');

const fn = function (text) {
    http(`http://emoji.getdango.com/api/emoji?q=${text}`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const res = JSON.parse(body).results;
            let str = '';
            res.map(emoji=>{
                str += emoji.text + ' ';
            })
            console.log(str);
        }
    })
}

module.exports = fn;