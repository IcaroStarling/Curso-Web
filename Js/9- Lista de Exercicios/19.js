function calcMedia(array) {
    getTotal = (acumulador, total) => (total += acumulador)
    return array.reduce(getTotal) / array.length
}

console.log(calcMedia([0,10]))
console.log(calcMedia([1,2,3,4,5]))