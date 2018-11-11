const http = require('http');

const fn = function (text) {
    const options = {
        host: 'emoji.getdango.com',
        port: '80',
        path: '/api/emoji',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    const req = http.request(options, function (response) {
        response.on('data', function (data) {
            console.log(data)
        })
        response.on('end', function () {});
    })
    req.end();
}

module.exports = fn;