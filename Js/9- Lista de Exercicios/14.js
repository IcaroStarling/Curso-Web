objetoParaArray = function(obj) {
    const array = []
    for(let chave in obj){
        array.push([chave, obj[chave]])
    }
    return array
}

console.log(objetoParaArray({
    nome: 'Maria',
    profissao: 'Desenvolvedora de Software'
}))