function utilOuNao(num) {
    switch (num) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia Util"
        case 7:
            return "Fim de semana"
            default:
                return "Dia invalido"
    }
}

console.log(utilOuNao(1))
console.log(utilOuNao(2))
console.log(utilOuNao(3))
console.log(utilOuNao(4))
console.log(utilOuNao(5))
console.log(utilOuNao(6))
console.log(utilOuNao(7))
console.log(utilOuNao('a'))