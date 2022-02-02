"use strict";
var Saudacao;
(function (Saudacao) {
    function saudarComOla(pessoa) {
        console.log('Olá, ' + pessoa.nome);
    }
    Saudacao.saudarComOla = saudarComOla;
})(Saudacao || (Saudacao = {}));
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
Saudacao.saudarComOla(pessoa);
mudarNome(pessoa);
Saudacao.saudarComOla(pessoa);
// Saudacao.saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 })
pessoa.saudar('Skywalker');
// Usando Classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
Saudacao.saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 4));
console.log(Math.pow(3, 10));
console.log(Math.pow(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    c() { }
    a() { }
    b() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome;
    }
};
cli.log();
//# sourceMappingURL=interfaces.js.map