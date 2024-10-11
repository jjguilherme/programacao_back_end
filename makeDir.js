const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname, 'teste'),
    (err) => {
        if(err){
            return console.error(err);
        }
        console.log('Diretorio criado com sucesso!')
    }
)