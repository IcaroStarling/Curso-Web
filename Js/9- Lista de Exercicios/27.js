function inverteValores(obj) {
    let obj2 = {}

    for(let chave in obj) {
        obj2[obj[chave]] = chave
    }
    return obj2
}

console.log(inverteValores({a: 1, b: 2, c: 3}))