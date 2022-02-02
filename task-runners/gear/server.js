const express = require("express");
const path = require("path");
const app = express();

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static files
app.use(express.static(path.resolve(__dirname, "public", "assets")));

// view engine
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
