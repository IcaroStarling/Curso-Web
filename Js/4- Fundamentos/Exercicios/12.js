function fatorial(num) {
    let fator = 1
    let i 
    for (i = num; i > 1; i--)
    {
        fator = fator * i
    }
    console.log(`Fatorial de ${num}: ${fator}`)
}


fatorial(5)
fatorial(10)
fatorial(3)