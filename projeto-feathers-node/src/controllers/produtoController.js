const Produto = require("../services/produto.service");

exports.home = function (req, res) {
    const produto = Produto.findAll();
    res.json(produto);
};

exports.show = function (req, res) {
    const produto = Produto.findById(req.params.id);
    res.json(produto);
};

exports.create = function (req, res) {
    const produto = Produto.create({
        id: Produto.findAll().length + 1,
        nome: req.body.nome
    })
    res.json(produto);
};

exports.update = function (req, res) {
    const produto = Produto.update(req.params.id, req);
    res.json(produto);
};

exports.delete = function (req, res) {
    const produto = Produto.delete(req.params.id);
    res.json(produto);
};

