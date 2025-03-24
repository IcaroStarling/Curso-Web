function repete(conteudo, vezes) {
    let repetido = []
    for(let i = 0; i < vezes; i++) {
    repetido[i] = conteudo
    }
    return repetido
}

console.log(repete("código", 2))
console.log(repete(7, 3))