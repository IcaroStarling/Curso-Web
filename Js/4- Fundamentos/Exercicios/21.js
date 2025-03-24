function calcValor(idade) {
    if (idade >= 0 && idade < 10) {
        return "R$180,00"
    }
    else if (idade >= 0 && idade < 30) {
        return "R$150,00"
    }
    else if (idade >= 0 && idade < 60) {
        return "R$195,00"
    }
    else if (idade >= 0 && idade > 60) {
        return "R$230,00"
    }
    else {
        return "Idade Invalida"
    }

}

console.log(calcValor(5))
console.log(calcValor(15))
console.log(calcValor(30))
console.log(calcValor(75))
console.log(calcValor(-5))
console.log(calcValor("Idade"))