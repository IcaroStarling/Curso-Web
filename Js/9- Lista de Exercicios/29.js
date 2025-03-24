function segundoMaior(array) {
    let maior = 0
    let segundo = 0
    for (let i = 0; i < array.length; i++) {
        if (segundo < array[i]) {
            segundo = array[i]
        }
        if (maior < segundo) {
            [maior, segundo] = [segundo, maior]
        }
    }
    console.log('Maior:' + maior + '\nSegundo:' + segundo)
}

segundoMaior([12, 16, 1, 5])
segundoMaior([8, 4, 5, 6])
segundoMaior([2,5,2,5])