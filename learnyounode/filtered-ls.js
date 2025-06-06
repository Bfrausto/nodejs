const fs = require('fs')

fs.readdir(process.argv[2], function (err, list){
    // /fillter list by 3 argument
    const ext = process.argv[3]
    list = list.filter(function (file) {
        if (ext.startsWith('.')) {
            return file.endsWith(ext)
        }
        return file.endsWith('.' + ext)
    })

    // print list
    list.forEach(function (file) {
        console.log(file)
    })
})
