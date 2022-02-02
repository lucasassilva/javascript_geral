function Pessoa() {
    this.idade = 0
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, /*.bind(this)*/1000)
}

new Pessoa

// const car = {
//     name: 'Gol',
//     color: 'Azul',
//     price: 20000,
//     status(param1, param2){
//         console.log(this.name, this.color, this.price, param1, param2)
//     }
// }


// const car2 = car.status.bind(car)
// car2()

// const person = {
//     name: 'Lucas',
//     age: 19
// }

// car.status.call({name: 'Fox', color: 'Preto', price: 30000}, 'PARAMETRO1', 'PARAMETRO2')

// function print(param1) {
//     console.log(param1 * this.price)
// }

// print.call(car, 20 )

