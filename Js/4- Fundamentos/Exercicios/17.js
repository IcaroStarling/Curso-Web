function calcSalario(plano, salario) {
    switch(plano) {
        case "A":
            return salario * 1.1
        case "B":
            return salario * 1.15
        case "C":
            return salario * 1.2
        default:
            return "Plano Invalido"
    }
}

console.log(calcSalario("A",1000))
console.log(calcSalario("B",1000))
console.log(calcSalario("C",1000))
console.log(calcSalario("D",1000))