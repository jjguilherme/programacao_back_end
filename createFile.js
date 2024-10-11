const fs = require('fs');

fs.appendFile('python.txt', 'Novos dados append', function(err){
    if(err)throw err;
    console.log('Salvo!')
});
