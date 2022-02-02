// Model é uma representação da estrutura de uma tabela no banco de dados
const Sequelize = require('sequelize');
const connection = require('./database');

const Resposta = connection.define("respostas", {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({ force: false }).then(() => {  // caso as tabelas do banco de dados existir ele não vai forçar a criação novamente
    console.log("Tabela Resposta criada com sucesso");
})
module.exports = Resposta
