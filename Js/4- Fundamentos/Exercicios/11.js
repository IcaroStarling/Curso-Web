function calcBissexto(ano) {
    if (ano % 4 === 0) {
        if (ano % 100 === 0) {
            if (ano % 400 === 0) {
                console.log(`${ano} é um ano bissexto.`);
                return true;
            } else {
                console.log(`${ano} não é um ano bissexto.`);
                return false;
            }
        } else {
            console.log(`${ano} é um ano bissexto.`);
            return true;
        }
    } else {
        console.log(`${ano} não é um ano bissexto.`);
        return false;
    }
}




console.log(calcBissexto(1700))
console.log(calcBissexto(2000))
console.log(calcBissexto(2001))
console.log(calcBissexto(2004))