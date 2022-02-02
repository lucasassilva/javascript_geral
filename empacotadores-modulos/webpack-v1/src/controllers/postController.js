const { connection } = require('../../config/db.config');

exports.show = (req, res) => {
    res.render('posts/create');
};

exports.create = (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const post = {
        titulo: titulo,
        descricao: descricao,
        created_at: new Date()
    };
    connection.query('INSERT INTO `posts` SET ?', post, (err) => {
        if (err) throw err;
        return res.redirect('/');
    });
};