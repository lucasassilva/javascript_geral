const sequencia = {
    _valor: 1, // convenção
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)


function Product(name, price) {
    this.name = name;
    this.price = price;
    var _discount; // atributo privada
    Object.defineProperty(Product, "discount", {
        writable: false, // Se for falso, o valor da propriedade não pode ser alterado.
        enumerable: false, // Se for falso, qualquer tentativa de excluir a propriedade ou alterar seus atributos falhará.
        configurable: false, // Se verdadeiro, a propriedade será iterada quando um usuário for mostrar o objeto
        get: function() { return _discount; },
        set: function(value) { _discount = value; if (_discount > 80) _discount = 80; }
    });
}

const p1 = new Product('Vassoura', 20.00)
console.log(p1)
p1.discount = 100
console.log(p1.discount)