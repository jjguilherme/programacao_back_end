let n1 = 1
let n2 = 3.14
let nome = "abc"
const obj = {
    nome: "Joao",
    idade: 55
}
let vet = [1,2,3,4]

function soma(n1,n2){
    return n1+n2
}
let subtrai = function(n1,n2){
    return n1 - n2
}
let divide = (n1,n2) => {
    return n1/n2
}

function operacao(fn,n2,n1){
    return fn(fn(n1,n2), fn(n2,n1))
}

console.log(operacao(soma,2,3))