const fs = require('fs').promises; // Importa fs com suporte a promises
const path = require('path');

async function lerCSV(nomeArquivo, separador = ',') {
  const filePath = path.join(__dirname, nomeArquivo);

  try {
    // Lê o arquivo CSV como texto
    const data = await fs.readFile(filePath, 'utf8');

    // Divide o conteúdo do arquivo em linhas
    const linhas = data.split('\n');

    // Obtém o cabeçalho (primeira linha)
    const cabecalho = linhas[0].split(separador).map(item => item.trim());

    // Array para armazenar os objetos gerados a partir das linhas do CSV
    const resultado = [];

    // Percorre cada linha a partir da segunda (índice 1)
    for (let i = 1; i < linhas.length; i++) {
      // Separa os valores de cada linha e cria um objeto para armazenar os dados
      const valores = linhas[i].split(separador).map(item => item.trim());
      const linhaObj = {};

      // Atribui cada valor à sua respectiva chave (do cabeçalho)
      cabecalho.forEach((coluna, index) => {
        linhaObj[coluna] = valores[index];
      });

      // Adiciona o objeto resultante ao array de resultados
      resultado.push(linhaObj);
    }

    return resultado; // Retorna o array de objetos
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err}`);
    throw err; // Lança o erro para ser tratado na chamada da função
  }
}

async function gravarCSV(matriz, nomeArquivo, separador = ',') {
  // Converte a matriz para uma string no formato CSV
  const linhasCSV = matriz.map(linha => linha.join(separador)).join('\n');

  const filePath = path.join(__dirname, nomeArquivo);

  try {
    // Escreve a string CSV no arquivo
    await fs.writeFile(filePath, linhasCSV, 'utf8');
    console.log(`Arquivo CSV gerado: ${filePath}`);
  } catch (err) {
    console.error(`Erro ao gerar o arquivo CSV: ${err}`);
    throw err; // Lança o erro para ser tratado onde a função é chamada
  }
}

// Exemplo de uso da função assíncrona
(async () => {
  //Insira aqui o código para gerar e ler o arquivo CSV
  console.log(await lerCSV('teste.csv'));

  mtx = [
    ['id','nome','idade'],
    [1,'pessoa1',12],
    [2,'pessoa2', 11]
  ]

  await gravarCSV(mtx);
})();
