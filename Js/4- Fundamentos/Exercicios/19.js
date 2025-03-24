function cardapio(codigo, quant) {
    switch(codigo) {
 case 100:
    return "R$" + 3 * quant
 case 200:
    return "R$" + 4 * quant
 case 300:
    return "R$" + 5.5 * quant
 case 400:
    return "R$" + 7.5 * quant
 case 500:
    return "R$" + 3.5 * quant
 case 600:
    return "R$" + 2.8 * quant
 default:
    return "Produto não existe"
    }
}

console.log(cardapio(100, 3))
console.log(cardapio(200, 2))
console.log(cardapio(300, 1))
console.log(cardapio(400, 4))
console.log(cardapio(500, 2))
console.log(cardapio(600, 1))
console.log(cardapio(700, 3))