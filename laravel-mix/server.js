const express = require("express");
const app = express();
const path = require("path");
const homeRouter = require("./src/routes/home");

// view engine
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "hbs");

// body parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes
app.use(homeRouter);

app.listen(3000, (err) => {
    if(err) console.log(err);
    console.log("Servidor rodando em http://localhost:3000");
});