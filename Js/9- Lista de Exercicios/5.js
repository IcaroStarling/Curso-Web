function maiorOuIgual(x, y) {
    if (x >= y && x === y) {
        return true
    }
    else {
        return false
    }
}

if (maiorOuIgual(0, 0))
    console.log('True')
else
    console.log('False')
if (maiorOuIgual(0, '0'))
    console.log('True')
else
    console.log('False')
if (maiorOuIgual(5, 1))
    console.log('True')
else
    console.log('False')