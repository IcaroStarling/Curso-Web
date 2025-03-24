let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador) {
    if (multiplicador > 5){
        (function() {
            for (let i in vetor) {
                vetor[i] = vetor[i] * multiplicador
            }
        })()
    }
    else {
        for (let i in vetor) {
            vetor[i] = vetor[i] * multiplicador
        }
    }
    console.log(vetor)
}

multiplicaVetor([1,2,3,4,5], 2)
multiplicaVetor([1,2,3,4,5], 10)