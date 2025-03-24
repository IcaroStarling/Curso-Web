function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao){
    let juros = taxaJuros * tempoAplicacao
    return ((capitalInicial * juros).toFixed(2))
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    let capital = capitalInicial
    for (let i = 0; i < tempoAplicacao; i++) {
        capital += capital * taxaJuros
    }
    return (capital.toFixed(2))
}

console.log(`Juros simples = R$${jurosSimples(1000, 0.1, 12)}`)

console.log(`Juros compostos = R$${jurosCompostos(1000, 0.1, 12)}`)