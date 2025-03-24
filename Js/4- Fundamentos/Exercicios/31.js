function contaNegativos(numeros) {
    let cont = 0
    for (let i of numeros) {
        if (i < 0)
            cont++
    }
    console.log(`Numeros negativos: ${cont}`)
}

numeros = [-2, 0, 1, -10, 23, -32, -9]

contaNegativos(numeros)