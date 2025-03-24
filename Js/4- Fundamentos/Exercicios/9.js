function sistemaNotas(nota) {
    if (nota < 38)
        return nota
    else {
        let arrendonda = Math.ceil(nota / 5) * 5
        if (arrendonda - nota < 3)
            return arrendonda
        else return nota
    }
}

console.log(sistemaNotas(38))
console.log(sistemaNotas(46))
console.log(sistemaNotas(47))
console.log(sistemaNotas(48))
console.log(sistemaNotas(84))
