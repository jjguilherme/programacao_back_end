const fs = require('fs')

fs.rename('demo.txt', 'jesus.txt', function(err){
    if(err) throw err;
    console.log('Arquivo renomeado');
})