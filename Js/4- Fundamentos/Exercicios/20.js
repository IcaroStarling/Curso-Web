function calcTtroco(valor) {
    let nota100 = 0, nota50 = 0, nota10 = 0, nota5 = 0, nota1 = 0

    console.log(`Valor: ${valor}`)

    while (valor > 0) {
        if (valor >= 100) {
            nota100++
            valor -= 100
        }
        else if (valor >= 50) {
            nota50++
            valor -= 50
        }
        else if (valor >= 10) {
            nota10++
            valor -= 10
        }
        else if (valor >= 5) {
            nota5++
            valor -= 5
        }
        else{
            nota1++
            valor -= 1
        }

    }
    console.log(`${nota100} nota(s) de R$100, ${nota50} nota(s) de R$50, ${nota10} nota(s) de R$10, ${nota5} nota(s) de R$5 e ${nota1} de R$1`)
    console.log("===================")
}

calcTtroco(18)
calcTtroco(122)