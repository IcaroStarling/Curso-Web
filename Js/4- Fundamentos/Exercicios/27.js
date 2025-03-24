function verificaAltura(altura1, altura2, taxa1 = 0, taxa2 = 0) {
    let tempo = 0
    console.log("====================================")
    if (altura1 > altura2) {
        console.log("A criança 1 é mais alta!")
        if (taxa1 > taxa2) {
            console.log("A criança 2 não ficara mais alta que a criança 1")
        }
        else {
            while (altura1 > altura2) {
                altura1 *= (taxa1 + 1)
                altura2 *= (taxa2 + 1)
                tempo++
            }
            console.log(`A criança 2 ficará mais alta que a criança 1 em ${tempo} anos`)
        }
    }
    else if (altura2 > altura1) {
        console.log("A criança 2 é mais alta!")
        if (taxa2 > taxa1) {
            console.log("A criança 1 não ficara mais alta que a criança 2")
        }
        else {
            while (altura2 > altura1) {
                altura1 *= (taxa1 + 1)
                altura2 *= (taxa2 + 1)
                tempo++
            }
            console.log(`A criança 1 ficará mais alta que a criança 2 em ${tempo} anos`)
        }
    }
    else {
        console.log("As crianças possuem o mesmo tamanho")
    }
    console.log("====================================")
}

verificaAltura(160, 150, 0.2, 0.25)
verificaAltura(150, 160, 0.25, 0.2)
verificaAltura(160, 160)
verificaAltura(160, 150, 0.25, 0.2)
verificaAltura(150, 160, 0.2, 0.25)