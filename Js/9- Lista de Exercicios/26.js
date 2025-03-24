function removerVogais(palavra) {
    let novaPalavra
    novaPalavra = palavra.replace('a', '')
    novaPalavra = novaPalavra.replace('e', '')
    novaPalavra = novaPalavra.replace('i', '')
    novaPalavra = novaPalavra.replace('o', '')
    novaPalavra = novaPalavra.replace('u', '')
    console.log(novaPalavra)
}

removerVogais('Cod3r')
removerVogais('Fundamentos')