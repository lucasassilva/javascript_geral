"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var typeorm_1 = require("typeorm");
var user_routes_1 = require("./routes/user.routes");
var app = express();
typeorm_1.createConnection();
// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "app", "views"));
app.use(user_routes_1.default);
app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000");
});
