function Carro(velociadeMaxima = 200, delta = 5) {
    // Atributo Privado
    let velociadeAtual = 0

    // Metodo publico
    this.acelerar = function () {
        if (velociadeAtual + delta <= velociadeMaxima) {
            velociadeAtual += delta
        } else {
            velociadeAtual = velociadeMaxima
        }
    }


    // Metodo publico
    this.getVelocidadeAtual = function () {
        return velociadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)