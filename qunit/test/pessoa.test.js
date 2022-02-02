const Pessoa = require("../public/assets/js/Pessoa");

QUnit.test("pessoa", assert => {
    const pessoa = new Pessoa("Lucas Alves", 20);
    assert.notOk(typeof pessoa.nome != "string", "atributo nome é uma string da classe Pessoa");
    assert.notOk(typeof pessoa.idade != "number", "o atributo idade é um number da classe Pessoa");
});
