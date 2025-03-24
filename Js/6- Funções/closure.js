// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar a manipular variáveis externa à função

// Contexto lexico em ação

const x = 'Global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())