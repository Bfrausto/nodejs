const mymodule = require('./mymodule');

const dirPath = process.argv[2];
const extFilter = process.argv[3];

mymodule(dirPath, extFilter, function (err, files) {
    if (err) {
        return console.error('Error:', err);
    }

    files.forEach(file => {
        console.log(file);
    });
});
