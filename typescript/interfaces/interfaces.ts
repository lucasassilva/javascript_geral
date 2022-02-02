interface Humano {
    nome?: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}

namespace Saudacao {
    export function saudarComOla(pessoa: Humano ) {
        console.log('Olá, ' + pessoa.nome)
    }
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

Saudacao.saudarComOla(pessoa)
mudarNome(pessoa)
Saudacao.saudarComOla(pessoa)
// Saudacao.saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 })
pessoa.saudar('Skywalker')

// Usando Classes...
class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
Saudacao.saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

// Interface Função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo = function (base: number, exp: number): number {
    return Array(exp).fill(base).reduce((t, a) => t *a)
}

console.log(potencia(3, 4))
console.log(Math.pow(3, 10))
console.log(3 ** 10)

// Herença
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    c(): void {}
    a(): void {}
    b(): void {}
}

abstract class AbstrataABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}

interface Object {
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()

const cli = { 
    nome: 'Pedro', 
    toString() { 
        return this.nome 
    }
}
cli.log()
