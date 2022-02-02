require("./assets/css/main.css");
const send = require("./assets/js/send");

send("Frase 1")
    .then(value => console.log(value))
    .catch(err => console.log(err));

function teste() {
    console.log("Hello World");
}

teste();

const pessoa = {
    nome: "Lucas",
    sobrenome: "Alves",
};

console.log(pessoa);

