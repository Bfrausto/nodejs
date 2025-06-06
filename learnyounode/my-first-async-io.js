const fs = require('fs')
const file = fs.readFile(process.argv[2], function (err,data){
    console.log(data.toString().split('\n').length -1)
})
// const str = file.toString()
// const split = str.split('\n')
// console.log(split.length -1)
