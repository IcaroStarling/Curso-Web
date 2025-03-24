function listaRecordes(lista) {
let pontuacoes = lista.split(",").map(Number)
let QuebraRecordes = 0, maiorRecorde = pontuacoes[0], menorRecorde = 0
for (let i = 1; i < pontuacoes.length; i ++) {
    if (pontuacoes[i] > maiorRecorde) {
        maiorRecorde = pontuacoes[i]
        QuebraRecordes++
    }
    else if (pontuacoes[i] < pontuacoes[menorRecorde]){
        menorRecorde = i
    }
}
let retorno = [QuebraRecordes, menorRecorde + 1]
return retorno
}

let lista = "10,13,3,10,13,12,20,25"

console.log(listaRecordes(lista))

