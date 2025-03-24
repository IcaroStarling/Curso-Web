function calculadora(a, operacao, b) {
switch(operacao) {
    case "+":
        return a + b
    case "-":
        return a - b
    case "/":
        return a / b
    case "*":
        return a * b
    default:
        return "Operação Invalida!"
}
}

console.log(calculadora(5,"+",2))
console.log(calculadora(5,"-",2))
console.log(calculadora(5,"/",2))
console.log(calculadora(5,"*",2))
console.log(calculadora(5,"^",2))
