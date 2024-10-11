const fs = require('fs')

fs.writeFile('python.txt', 'Yeah!!!', function (err){
    if(err)throw err;
    console.log('Conteudo alterado')
})