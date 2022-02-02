const { connection } = require('../../config/db.config');

exports.show = (req, res) => {
    connection.query('SELECT * FROM posts', function(err, results) {
        if(err) throw err;
        res.render('index', {
            posts: results,
        });
    });
};