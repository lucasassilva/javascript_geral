const express = require("express");
const route = express.Router();
const consign = require("consign");

// Autoload
consign().include("./controllers").into(route);

// Rotas da home
route.get("/", route.controllers.homeController.paginaInicial);
route.post("/", route.controllers.homeController.trataPost);

// Rotas de contato
route.get("/contato", route.controllers.contatoController.paginaInicial);

module.exports = route;