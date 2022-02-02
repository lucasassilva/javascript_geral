const path = require("path");
const Pessoa = require("./z/mod2");
const p1 = new Pessoa("Lucas");

console.log(p1.falar());

console.log(__filename);
console.log(__dirname);

console.log(path.resolve(__dirname, ".", ".", "arquivos", "imagens"));

