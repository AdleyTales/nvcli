const http = require('http');
const chalk = require('chalk');

function parseRequest(data) {
    data = JSON.parse(data);
    let pron = data.basic.phonetic || "无",
        trans = "",
        para = "";

    if (data.basic) {
        data.basic.explains.map(str => {
            trans += `\n${str}`;
        });
    }

    if (data.web) {
        data.web.map((web, i) => {
            para += `\n\n${i+1}: ${web.key}\n${web.value.join(',')}`;
        });
    }

    const result = `\n${chalk.magentaBright('发音: '+pron)}\n\n${chalk.greenBright('翻译：'+ trans)}\n\n${chalk.blueBright('网络释义：'+para)}`;

    console.log(result);
}

function query(keyword) {
    const options = {
        host: 'fanyi.youdao.com',
        port: '80',
        path: '/openapi.do?keyfrom=translation-tool&key=1730699468&type=data&doctype=json&version=1.1&q=' + encodeURIComponent(keyword)
    };

    const callback = function (response) {
        response.on('data', function (data) {
            parseRequest(data);
        });
        response.on('end', function () {});
    }
    const req = http.request(options, callback);
    req.end();
}

module.exports = query;