///Verificar se um número é primo: Crie uma função isPrimo que 
///receba um número e retorne true se for primo e false caso contrário.
function ehPrimo (num){
    if(num<=1) return false;
    for (i=2; i<= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }   
    return true;
}

console.log(ehPrimo(7)); // true
console.log(ehPrimo(10)); // false