produtos = [
    { nome: 'Jornal Online', preco: 89.99 },
    { nome: 'Cinema', preco: 150}
]


function calcDespesas(produtos) {
    getPrecos = a => a.preco 
    return produtos.map(a => a.preco).reduce( function(acumulador, total) {
        total += acumulador
        return total
    })
}

console.log(calcDespesas([
    { nome: 'Jornal Online', preco: 89.99 },
    { nome: 'Cinema', preco: 150}
]))

console.log(calcDespesas([
    {nome: 'Galaxy S20', preco: 3599.99},
    { nome: 'MacBook PRO', preco: 30999.90}
]))