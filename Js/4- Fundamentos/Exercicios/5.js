function arredonda(num) {
    console.log('R$' + num.toFixed() + ',' + (num.toFixed(2) * 100))
}

arredonda(0.1 + 0.15)