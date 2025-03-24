function classificaTringulos(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3)
        return('Seu triangulo possui os 3 lados iguais, ele é um Triangulo Equilátero')
    else if ((lado1 == lado2 && lado2 != lado3) || (lado2 == lado3 && lado3 != lado1) || (lado1 == lado3 && lado1 != lado2)) {
        return('Seu triangulo possui os 2 lados iguais, ele é um Triangulo Isósceles')
    } else {
        return('Seu triangulo não possui nenhum lado igual, ele é um Triangulo Escaleno')
    }
}

console.log(classificaTringulos(1,1,1))
console.log(classificaTringulos(1,1,2))
console.log(classificaTringulos(1,2,1))
console.log(classificaTringulos(2,1,1))
console.log(classificaTringulos(1,2,3))