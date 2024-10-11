const fs = require('fs');

const origem = '/home/utfpr/Documentos/aula3/jesus.txt';
const destino = '/home/utfpr/Documentos/aula2/jesus.txt';

fs.copyFile(origem, destino, (erro) => {
    if (erro) {
        console.error('Erro ao copiar o arquivo:', erro);
    } else {
        console.log('Arquivo copiado com sucesso!');
    }
});
