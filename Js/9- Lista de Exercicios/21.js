function menorDoArray(array) {
    let menor = array[0]
    for (let i in array) {
        if (array[i] < menor)
            menor = array[i]
    }
    return menor
}

console.log(menorDoArray([10, 5, 35, 65]))
console.log(menorDoArray([5, -15, 50, 3]))