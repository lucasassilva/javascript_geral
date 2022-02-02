const express = require("express");
const route = express.Router();
const consign = require("consign");

// Autoload
consign()
    .include("./src/controllers")
    .into(route);

// Rotas da home
route.get("/", route.src.controllers.homeController.paginaInicial);
route.post("/", route.src.controllers.homeController.trataPost);

// Rotas de contato
route.get("/contato", route.src.controllers.contatoController.paginaInicial);

module.exports = route;