function contaParesImpares(v) {
    let par = 0, impar = 0
for (let numero of v) {
    if (numero % 2 === 0) {
        par++
    }
    else if (numero % 2 === 1) {
        impar++
    }
}
console.log(`Par(es): ${par}\nImpar(es): ${impar}`)
}

let numeros1 = [1,2,3,4,5,6]
contaParesImpares(numeros1)

let numeros2 = [2,4,6,8,10]
contaParesImpares(numeros2)