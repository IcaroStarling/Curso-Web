// IIFE -> Immediately Invoked Function Expressed

const a = 32
console.log(a);

(function() {
    let a = 109
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
    console.log(a)
})()

console.log(a)