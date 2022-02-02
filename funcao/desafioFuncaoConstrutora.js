class Pessoa {

    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }

}

const p1 = new Pessoa('João')
p1.falar()


function criarPessoa(name) {
    this.name = name
    this.falar = () => console.log(`Meu nome é ${this.name}`)
}

const p2 = new criarPessoa('Lucas')
p2.falar()