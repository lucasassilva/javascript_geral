const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome"><br />
            Sobrenome do cliente <input type="text" name="sobrenome">
            <button>Enviar</button>
        </form>
    `);   
});

app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
    console.log(req.params); // /profiles/3
    console.log(req.query);  // /profiles/?chave1=valor1&chave2=valor2
    res.send(req.query.email);
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send(`Você me enviou: ${req.body.nome}`);
}); 

app.listen(3000, () => {
    console.log("http://localhost:3000");
    console.log("Servidor executando na porta 3000");
});