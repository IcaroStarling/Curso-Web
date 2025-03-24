const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona na ultima posição
console.log(pilotos) 

pilotos.shift() // Remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona na primeira
console.log(pilotos)

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2,0,'Bottas', 'Massa') // Adiciona no índice 2
console.log(pilotos)


// Remover
pilotos.splice(3,1) // Remove 1 a partir do 3 indice
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) 
console.log(algunsPilotos2)