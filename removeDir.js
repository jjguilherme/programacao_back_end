const fs = require ('fs')

fs.rmdir("teste", {
    recursive: false,
}, (error) => {
    if(error){
        console.log(error);
    }
    else{"Nao recursivo: Diretorios deletados!"}
})