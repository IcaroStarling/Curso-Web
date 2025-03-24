function pA(n, a1, r) {
    termosPa = []
    somaTermos = (n * ((2 * a1) + (n - 1) * r)) / 2

    for (let i = 0; i < n; i++) {
        termosPa[i] = a1 + i * r
    }
    for (let i in termosPa) {
        console.log(`Progressão aritmetica: ${termosPa[i]}`)
    }
    console.log(`Soma dos termos: ${somaTermos}`)


}

function pG(n, a1, r) {
    termosPg = []
    somaTermos = (a1 * ((r**n)-1))/(r-1)

    for (let i = 0; i < n; i++) {
        termosPg[i] = (a1*(r**i))
    }

    for (let i in termosPg) {
        console.log(`Progressão geometrica: ${termosPg[i]}`)
    }
    console.log(`Soma dos termos: ${somaTermos}`)
}


pA(10, 10, 15)
pG(10, 5, 3)