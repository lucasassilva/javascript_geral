const express = require("express"); 
const path = require("path");
const routes = require("../routes");

class App {

    constructor() {
        this.app = express();
        this.engine();
        this.routes();
        this.middlewares();
    }

    engine() {
        this.app.set("view engine", "pug");
        this.app.set("views", path.resolve(__dirname, "views"));
    }

    middlewares() {
        this.app.use(express.static(path.resolve(__dirname, "../public", "assets")));
    }

    routes() {
        this.app.use(routes);
    }
    
}

const app = new App().app;
module.exports = app;


