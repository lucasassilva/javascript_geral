const Sequelize = require('sequelize');

const connection =  new Sequelize('guiaperguntas', 'root', 'Rlxrvt1241x@', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection
