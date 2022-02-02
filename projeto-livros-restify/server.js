const restify = require("restify");
const server = restify.createServer();
const routes = require("./routes");

// body parser
server.use(restify.plugins.bodyParser()); 

routes.applyRoutes(server);

server.listen(3000, () => {
   console.log("Servidor rodando em http://localhost:3000");
});





