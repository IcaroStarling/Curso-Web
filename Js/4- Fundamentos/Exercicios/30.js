function maiorEMenor(numero) {
let maior = numero[0], menor = numero[0]
    for (let i of numero) {
        console.log(i)
        if(i > maior)
            maior = i
        if(i < menor)
            menor = i
}
console.log(`Maior: ${maior}\nMenor:${menor}`)
}


let numeros1 = [130,102,241,321,120]
maiorEMenor(numeros1)