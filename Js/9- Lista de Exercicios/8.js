function multiplica(a, b) {
    let soma = a
    for (let i = 1; i < b; i++) {
        soma += a
    }
    console.log(`${a} * ${b} = ${soma}`)
}

multiplica(5,5)
multiplica(0,7)
multiplica(10,2)