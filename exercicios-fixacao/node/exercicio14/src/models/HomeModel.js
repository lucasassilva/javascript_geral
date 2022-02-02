const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({ // Schema é a modelagem dos nossos dados
    titulo: {
        type: String,
        required: true
    },
    descricao: { 
        type: String,
        required: true
    }
}); 

const HomeModel = mongoose.model("Home", HomeSchema);

class Home {}

module.exports = Home
