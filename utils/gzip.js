const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');

module.exports = function (path) {
    path = path.split(',');
    const input = path[0].trim();
    const output = path[1].trim();
    const inputStream = fs.createReadStream(input);
    const outStream = fs.createWriteStream(output);
    inputStream.pipe(gzip).pipe(outStream);
};