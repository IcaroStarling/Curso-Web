function filtraDigitos(array, digitos) {
    let maiores = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= 10 ** (digitos - 1) && array[i] < 10 ** digitos) {
            maiores.push(array[i])
        }
    }
    return maiores
}

console.log(filtraDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtraDigitos([5, 9, 1, 125, 11],1))