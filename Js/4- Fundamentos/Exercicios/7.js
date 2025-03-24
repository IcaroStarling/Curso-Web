function Bhaskara(a, b, c) {
    let x1, x2, delta

delta = (b ** 2) - (4 * a * c)

if (delta < 0) {
    return "Delta negativo"
}

else {
    x1 = (-b + Math.sqrt(delta)) / (2 * a)
    x2 = (-b - Math.sqrt(delta)) / (2 * a)

    let v = [x1, x2]
    return v
}
}


console.log(Bhaskara(1, 5, -14))
console.log(Bhaskara(1, -14, 50))
