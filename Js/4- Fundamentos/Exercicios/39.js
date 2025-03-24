function inverteVetores(vetorA, vetorB) {
    if (vetorA.length > vetorB.length) {
        for (let i = 0; i < vetorA.length; i++) {
            [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]]
        }
    }
    else {
        for (let i = 0; i < vetorB.length; i++) {
            [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]]
        }
    }
    console.log(vetorA)
    console.log(vetorB)
}

inverteVetores([1,2,3,4,5],[6,5,4,3,2,1])