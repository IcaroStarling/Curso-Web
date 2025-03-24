const primerioElemento = array => array[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
}) .then(primerioElemento)
   .then(primerioElemento)
   .then(letraMinuscula)
   .then(console.log)