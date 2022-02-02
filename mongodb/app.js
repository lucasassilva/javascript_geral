const mongoose = require("mongoose");
// Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
    useNewUrlParser: true 
}).then(() => {
    console.log("MongoDB Conectado...");
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: " + err);
});

// Model - Usuários
// Definindo o model
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    sobrenome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String,
        require: false
    }
});

// Collection
mongoose.model("usuarios", UsuarioSchema);

const User = mongoose.model("usuarios"); // Armazenando uma referencia ao schema

new User({
    nome: "Lucas",
    sobrenome: "Alves",
    email: "web.m.lucasalves@outlook.com",
    idade: 19,
    pais: "Brasil"
}).save().then(() => {
    console.log("Usuário criado com sucesso!");
}).catch((err) => {
    console.log("Houve um erro ao registrar o usuario: " + err);
}); 


