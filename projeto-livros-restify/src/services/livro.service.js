const fs = require("fs");

class LivroService {

    constructor() {
        this.raw = fs.readFileSync("./livros.json");
        this.livros = JSON.parse(this.raw);
    }
    
    findAll() {
        return this.livros;
    }

    findById(isbn) {
        for(let x in this.livros) {
            for(let y in x) {
                return this.livros[x][y].isbn == isbn ? this.livros[x][y] : null;
            }
        }
    }

}

const livro = new LivroService();
module.exports = livro;