function rand([max = 0, max = 1000]){
    if( min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand())

const arr = [25, 55, 98, 20, 72]
function v([a, b,,k, y]){
    console.log(a, b, k, y)
}
v(arr)

let obj = {
    nome: 'Rodrigo',
    idade: 23
}

function y({nome:k, idade:v}){
    console.log(k, v)
}

y(obj)

const p
console.log(p)





