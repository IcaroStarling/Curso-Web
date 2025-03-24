function buscaPalavras( busca, palavras ) {
    let contem = []
    let j = 0
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].includes(busca)) {
            contem[j] = palavras[i]
            j++
        }
    }
    return contem
}

console.log(buscaPalavras("pro", ["programação", "mobile", "profissional"])); 