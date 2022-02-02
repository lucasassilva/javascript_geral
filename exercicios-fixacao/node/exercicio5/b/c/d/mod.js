module.exports = function (x, y) {
    return x * y;
};

// Sobrescreveu o objeto contido no module.exports
module.exports = class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        return `Oi meu nome é ${this.nome}`;
    }
};





