const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const app = express(feathers());
const routes = require("./routes");

// body parser
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use("/api/v1/produtos", routes);

app.listen(3000, function () {
    console.log("Servidor rodando http://localhost:3000");
});