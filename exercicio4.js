///Encontrar o maior de dois números:
///Crie uma função maiorNumero que receba dois números e retorne o maior entre eles.

function maiorNumero(num1,num2){
    if (num1 > num2) {
        return num1
    }
    else if (num2>num1){
        return num2
    }
}

console.log(maiorNumero(5,4))