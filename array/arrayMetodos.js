const pilotos =  ['Vettal', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro! / remove da ultima posição!
console.log(pilotos)

pilotos.push('Verstappen') // adiciona na ultima posição!
console.log(pilotos)

pilotos.shift('') // remove da primeira posição!
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição!
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // vai ser adicionado antes do indice [2]
console.log(pilotos)

// remover 
pilotos.splice(3, 1) // massa quebrou :( // removido começando do indice [3]
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // gerar um novo array / pegar a partir do indice 1 até indice 3
console.log(algunsPilotos2)
