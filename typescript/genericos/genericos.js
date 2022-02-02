"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').lenght);
console.log(echo(27));
console.log(echo({ nome: 'João', idade: 27 }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
// Generics disponiveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
//Class com Generics
class OperacaoBianaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
//  console.log(new OperacaoBianaria('Bom', 'dia').executar)
//  console.log(new OperacaoBianaria(3, 7).executar)
//  console.log(new OperacaoBianaria(3, 'Opa').executar)
//  console.log(new OperacaoBianaria({}, null).executar)
class SomaBinaria extends OperacaoBianaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar);
console.log(new SomaBinaria(30, 434).executar);
class DiferencaEntreDatas extends OperacaoBianaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 5, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar);
// Desafio Classe Fila
// Atributo: fila (Array)
// Metodos: entrar, proximo, imprimir
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Gui', '12', 'Ana', 'Lu');
fila.imprimir();
fila.entrar('Rafael');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
//# sourceMappingURL=genericos.js.map