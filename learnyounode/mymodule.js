const fs = require('fs');
const path = require('path');

module.exports = function (dirPath, extFilter, callback) {
    fs.readdir(dirPath, function (err, files) {
        if (err) {
            return callback(err);
        }

        const filteredFiles = files.filter(file => {
            return path.extname(file) === '.' + extFilter;
        });

        callback(null, filteredFiles);
    });
};
