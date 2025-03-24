function funcaoDaSorte(num) {
    x = Math.ceil(Math.random() * 10)
    if (num == x)
        return `Parabéns! O numero sorteado foi ${x}`
    else 
        return `Que pena! O numero sorteado foi ${x}`
}

console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))