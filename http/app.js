let http = require('http');

http.createServer(function(res, res){
    res.end("<h1>Bem vindo ao meu site!</h1><h4>guiadoprogramador.com</h4>");
}).listen(3000);
console.log("Meu servidor está rodando!");
