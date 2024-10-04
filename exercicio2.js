//Verificar se um número é par: Crie uma função isPar que receba 
//um número e retorne true se for par e false se for ímpar.

function isOdd(num){
    if(num%2==0){
        return true
    }
    else{
        return false
    }
}

console.log(isOdd(5))