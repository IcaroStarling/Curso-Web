function vendeCarros(carro) {
    switch(carro) {
        case "Hatch":
            return "Compra realizada com sucesso!"
        case "Sedans":
        case "Motocicletas":
        case "Caminhonetes":
            return "Tem certeza que não prefere esse modelo?"
        default:
            return "Não vendemos esse tipo de carro aqui!"
    }
    
}

console.log(vendeCarros("Hatch"))
console.log(vendeCarros("Sedans"))
console.log(vendeCarros("Motocicletas"))
console.log(vendeCarros("Caminhonetes"))
console.log(vendeCarros("Eletricos"))