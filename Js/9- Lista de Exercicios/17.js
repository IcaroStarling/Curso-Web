const numeros = [1,2,3,4,5,6]

function soma(array) {
    let soma = 0
    for (let i in array) {
        soma += array[i]
    }
    return soma
}

console.log(soma(numeros))