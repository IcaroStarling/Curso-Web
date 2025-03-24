function imprimeImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        [inicio, fim] = [fim, inicio]
    }

    for (let i = inicio; i <= fim; i++)
    {
        if(i % 2 === 1) {
            console.log(i)
        }
    }
}

imprimeImpares(9,21)
imprimeImpares()