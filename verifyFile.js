const fs = require('fs')
fs.existsSync('jesus.txt', function(err){
    if(err)throw(err);
        console.log('O arquivo existe');
})