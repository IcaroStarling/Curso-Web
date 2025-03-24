function receberMelhorEstudante(obj) {
    let maiorMedia = {'nome': null, 'media': null}
    for (let chave in obj) {
        let media = 0
        let soma = 0
        for (let i = 0; i < obj[chave].length; i++) {
            soma += obj[chave][i]
            media = soma / (obj[chave].length)
        }
        if (media > maiorMedia.media) {
        maiorMedia = {'nome': chave, 'media': media}
        }
    }
    return maiorMedia
}

console.log(receberMelhorEstudante({
    'João': [8, 7.6, 8.9, 6],
    'Mariana': [9, 6.6, 7.9, 8],
    'Carla': [7, 7, 8, 9]
}))