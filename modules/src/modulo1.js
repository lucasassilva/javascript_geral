export const nome = "Lucas";
export const sobrenome = "Alves";
export const idade = 20;

const cpf = 12325232123;

export function soma(x, y) {
  return x + y;
}

export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
