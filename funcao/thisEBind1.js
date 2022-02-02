const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


// const pessoa2 = {
//     saudacao: 'Bom dia!',
//     falar(){
//         console.log(this)
//     }
// }

// const pessoa3 = {
//     saudacao: 'Boa Tarde!',
// }

// pessoa2.falar.call(pessoa3);
// const b = pessoa2.falar.bind(pessoa2)
// b()