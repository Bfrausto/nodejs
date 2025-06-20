const http = require('http');

const url = process.argv[2];

http.get(url, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
        console.log(data);
    });

    response.on('error', function (err) {
        console.error('Error:', err.message);
    });

    response.on('end', function () {
    });
});
