function esperarPor(tempo = 2000){
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve('Vishhhh')
        }, tempo)
    })
}

esperarPor(2000)
 .then(() => console.log('Executando promise 1...'))
 .then(esperarPor)
 .then(() => console.log('Executando promise 2...'))
 .then(esperarPor)
 .then(() => console.log('Executando promise 3...'))


async function executar() {
    
}
