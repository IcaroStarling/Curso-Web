function anuidade(mes, valor) {
    if (mes === 1) {
        return valor
    }
    else {
    for (let i = 1; i < mes; i++) {
        valor = valor * 1.05
        valor = valor.toFixed(2)
    }
    console.log("===========")
    return valor
}
}

console.log(anuidade(1, 1000))
console.log(anuidade(2, 1000))
console.log(anuidade(3, 1000))
console.log(anuidade(4, 1000))
console.log(anuidade(5, 1000))
console.log(anuidade(6, 1000))
console.log(anuidade(7, 1000))
console.log(anuidade(8, 1000))
console.log(anuidade(9, 1000))
console.log(anuidade(10, 1000))
console.log(anuidade(11, 1000))
console.log(anuidade(12, 1000))
console.log(anuidade(13, 1000))
