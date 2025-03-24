function filtraNumeros(vetor) {
    let j = 0
    let vetorNum = []
    for (let i = 0; i < vetor.length; i++) {
        if (typeof(vetor[i]) === 'number') {
            vetorNum[j] = vetor[i]
            j++
        }
    }

    return vetorNum
}

console.log(filtraNumeros([1, 2, 3, '4', 'casa']))
console.log(filtraNumeros([32,32323,232323,232, 'casinha']))