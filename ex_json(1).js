const fs = require('fs').promises; // Importa fs com suporte a promises

async function lerJSON(nomeArquivo) {
    try {
      // Lê o arquivo JSON como texto
      const data = await fs.readFile(nomeArquivo, 'utf8');
      
      // Converte a string JSON em um objeto JavaScript
      const jsonData = JSON.parse(data);
      return jsonData; // Retorna os dados lidos
    } catch (err) {
      console.error(`Erro ao ler o arquivo: ${err}`);
      throw err; // Lança o erro para ser tratado onde a função é chamada
    }
  }

async function gravarJSON(jsonData, nomeArquivo) {
    try {
      // Converte os dados para uma string JSON e grava no arquivo
      await fs.writeFile(nomeArquivo, JSON.stringify(jsonData, null, 2), 'utf8');
      console.log("Arquivo gravado com sucesso!");
    } catch (err) {
      console.error(`Erro ao gravar o arquivo: ${err}`);
      throw err; // Lança o erro para ser tratado onde a função é chamada
    }
  }

(async () => {
    console.log(await lerJSON('novoArquivo.json'));
})()