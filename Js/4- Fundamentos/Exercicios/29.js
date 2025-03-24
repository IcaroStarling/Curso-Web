function contaIntervalos(numeros) {
        let cont = 0
    for (let i = numeros[0]; i <= numeros[1]; i++) {
            console.log(i)
            cont++
        }
        console.log(`O intervalo dos dois números é de ${cont}`)
}

numeros1 = [10,20]
contaIntervalos(numeros1)