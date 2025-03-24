function leFruta(fruta) {
    switch(fruta) {
        case "Maça":
            return "Não vendemos essa fruta aqui!"
        case "Kiwi":
            return "Estamos com escassez de Kiwi"
        case "Melancia":
            return "Aqui está, são 3 reais o quilo"
        default:
            return "Fruta invalida"
    }
}

console.log(leFruta("Maça"))
console.log(leFruta("Kiwi"))
console.log(leFruta("Melancia"))
console.log(leFruta("Banana"))