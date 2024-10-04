///Verificar se um número é positivo ou negativo: Crie uma função isPositivo 
///que receba um número e retorne positivo, negativo ou zero.
function isPositivo(num1){
    if (num1>0){
        return "Positivo!"
    }
    else if(num1<0){
        return "Negativo!"
    }
    else{
        return "Zero!"
    }
}

console.log(isPositivo(10))