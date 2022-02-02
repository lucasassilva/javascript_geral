function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + max
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
console.log(rand())

const person = {
    idade: 27,
    nome: 'Rodrigo',
}

function status({ nome = '', idade = 0 }) {
    console.log(nome, idade)
}

status(person)
    //status({nome: 'Gabriel', idade: 23})