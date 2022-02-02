const Waterline = require("waterline");
const orm = new Waterline();
const routes = require("./routes");
const express = require("express");
const config = require("./config/db");
const path = require("path");
const app = express();

const User = require("./src/models/User");

// express
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "src", "views"));

// static files
app.use(express.static(path.resolve(__dirname, "public", "assets")));

// middlewares
app.use((req, res, next) => {
    res.locals.models = this.collections;
    next();
});

// routes
app.use(routes);

// models
orm.registerModel(User);

// orm
orm.initialize(config, (err, ontology) => {
    if (err) { console.log(err) }
    this.collections = ontology.collections;
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
