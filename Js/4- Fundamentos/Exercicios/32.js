function mediaAritmetica(numeros) {
    let soma = 0, cont = 0
    for (let i of numeros) {
        soma = soma + i
        cont++
    }
    let media = soma / cont
    console.log(`A média é ${media}`)
}

let numeros1 = [1, 5, 3, 2, 15]
mediaAritmetica(numeros1)