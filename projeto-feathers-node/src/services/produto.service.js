class ProdutoService {

    constructor() {
        this.produtos = [];
    }

    findAll() {
        return this.produtos;
    }

    create(obj) {
        const produto = {
            id: obj.id,
            nome: obj.nome
        }
        this.produtos.push(produto);
        return produto;
    }

    findById(id) {
        for (let x in this.produtos) {
            if (this.produtos[x].id == id) {
                return this.produtos[x];
            }
        }
    }

    update(id, req) {
        for (let x in this.produtos) {
            if (this.produtos[x].id == id) {
                this.produtos[x].nome = req.body.nome;
                return this.produtos[x];
            }
        }
    }

    delete(id) {
        for (let x in this.produtos) {
            if (this.produtos[x].id == id) {
                this.produtos.splice(this.produtos.findIndex(p => p.id === this.produtos.id) , 1)
                return this.produtos;
            }
        }
    }

}

const produto = new ProdutoService();
module.exports = produto;