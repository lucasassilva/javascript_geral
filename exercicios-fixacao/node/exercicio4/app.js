const path = require("path");
const axios = require("axios");
const { nome, sobrenome, falaNome } = require("./mod");
const { Pessoa } = require("./mod");

console.log(nome, sobrenome);
console.log(falaNome());

const p1 = new Pessoa("Lucas");
console.log(p1);

axios.get("https://jsonplaceholder.typicode.com/albums")
.then(res => console.log(res.data))
.catch(err => console.log(err));
