function inverso(valor) {
    if (typeof(valor) == "boolean")
        return !valor
    else if(typeof(valor) == "number")
        return valor * -1
    else
        return "Booleanos ou números esperados, mas o parâmetro é do tipo string"
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("Programação"))