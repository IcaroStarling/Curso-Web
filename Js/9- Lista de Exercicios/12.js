function removePropriedade(obj, propriedade) {
    let novoObj = {...obj}

    delete novoObj[propriedade]

    return novoObj
}

const obj1 = {
    nome: 'Ícaro',
    idade: 21,
    cidade: 'Betim',
    estudando: true
}

console.log(obj1)

console.log(removePropriedade(obj1, 'estudando'))
console.log(obj1)

