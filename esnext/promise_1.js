const primeiroElemento = arrayOuString => arrayOuString[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

.then(primeiraLetra)
.then(primeiroElemento)
.then(letraMinuscula)
.then(console.log)
