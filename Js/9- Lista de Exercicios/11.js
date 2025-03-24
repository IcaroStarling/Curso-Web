function receberPrimeiroEUltimo(vetor) {
let novoVetor = []
let ultimo = vetor.length - 1
novoVetor = [vetor[0],vetor[ultimo]]
return novoVetor
}

console.log(receberPrimeiroEUltimo([1,2,3,4]))
console.log(receberPrimeiroEUltimo([-100, 'aplicativo', 16]))