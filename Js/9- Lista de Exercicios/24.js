function contaLetras(letra, frase) {
    return frase.split(letra).length - 1
}

console.log(contaLetras('r', 'A sorte favorece os audazes'))
console.log(contaLetras('c', 'Conhece-te a ti mesmo'))