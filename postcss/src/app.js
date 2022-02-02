const express = require("express");
const path = require("path");
const routes = require("../routes");
const { Liquid } = require("liquidjs");
const engine = new Liquid();

class App {

    constructor() {
        this.app = express();
        this.engine();
        this.routes();
        this.middlewares();
    }

    engine() {
        this.app.engine("liquid", engine.express());
        this.app.set("views", path.resolve(__dirname, "views"));
        this.app.set("view engine", "liquid");
    }

    middlewares() {
        this.app.use(express.static(path.resolve(__dirname, "../public", "assets")));
    }

    routes() {
        this.app.use(routes)
    }

}

const app = new App().app;
module.exports = app;

