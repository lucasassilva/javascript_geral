// Model é uma representação da estrutura de uma tabela no banco de dados
const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('perguntas', { // criando uma tabela no banco de dados com nome: pergunta
    // criando os campos da tabela
    titulo: { 
        type: Sequelize.STRING,
        allowNull: false // exigido que campo não seja nullo
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false // é exigido que campo não seja nullo
    }
});

Pergunta.sync({ force: false }).then(() => {  // caso as tabelas do banco de dados existir ele não vai forçar a criação novamente
    console.log("Tabela Pergunta criada com sucesso");
})

module.exports = Pergunta;