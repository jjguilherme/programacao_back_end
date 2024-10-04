//Contar vogais em uma string: Crie uma 
//função contarVogais que receba uma string e retorne o número de vogais.
function contarVogais(string){
    const vogais = 'aeiouAEIOU'
    let contador = 0

    for(let i of string){
        if (vogais.includes(i)) {
            contador++;
        }
    }
    return contador
}

let resultado = contarVogais("Ola Mundo")
console.log(resultado)