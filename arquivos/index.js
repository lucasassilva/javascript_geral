const fs = require("fs"); // File System
const path = require('path');

fs.readFile("./lucas.alves", {encoding: 'utf-8'}, (erro, dados) => {
    if(erro) {
        console.log("Ocorreu uma falha durante a leitura do arquivo!");
    } else {
        console.log(dados);
    }
});

fs.writeFile("./conteudo.teste", "Novo conteúdo do arquivo!", (erro) => {
    if(erro) {
        console.log("Erro durante o salvamento...")
    }
});

function modificarUsuario(nome, curso, categoria) {
    fs.readFileSync(path.join(__dirname, "usuarios.json"), {encoding: "utf-8"}, (erro, dados) => {
        if(erro) {
            console.log("Um erro aconteceu");
        } else {
            const conteudo = JSON.parse(dados); // texto para objeto literal do javascript
            conteudo.nome = nome;
            conteudo.curso = curso;
            conteudo.categoria = categoria;
            fs.writeFile(path.join(__dirname, "usuarios.json"), JSON.stringify(conteudo), (erro) =>{
                if(erro) {
                    console.log("Um erro aconteceu durante a escrita!");    
                }
            });
        }
    });
}

// modificarUsuario("Paulo", "C# do jeito certo", "C#");




