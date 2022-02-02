class Pessoa {
  protected _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  get nome() {
    return this._nome;
  }
}

const p = new Pessoa("aaa");
console.log(p.nome);
