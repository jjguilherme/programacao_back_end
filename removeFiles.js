const fs = require('fs')

fs.unlink('python.txt', function (err){
    if (err) throw err;
    console.log('Arquivo deletado')
})