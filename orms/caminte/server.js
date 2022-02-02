const express = require("express");
const path = require("path");
const userRoutes = require("./src/routes/user.routes");
const app = express();

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "src", "app", "views"));

// routes
app.use(userRoutes);

app.listen(3000, function () {
  console.log("Servidor rodando em http://localhost:3000");
});
