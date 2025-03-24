const numeros = [0,1,2,3,4,5,6,7,8,9,10]

function numPares(array) {
let pares = []
    for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0) {
        if(i % 2 == 0) {
            if (i > 0)
        pares.push(array[i])
    }
}
    }
return pares
}

console.log(numPares(numeros))
