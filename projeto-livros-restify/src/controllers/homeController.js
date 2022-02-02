const Livro = require("../services/livro.service");

exports.home = function(req, res) {
    const produto = Livro.findAll();
    res.json(produto);
};

exports.show = function(req, res)  {
    const produto = Livro.findById(req.params.isbn);
    res.json(produto);
};

