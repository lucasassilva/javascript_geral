const express = require("express");
const userRouter = require("./src/routes/user.routes");
const path = require("path");
const app = express();

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("views", path.resolve(__dirname, "src", "app", "views"));
app.set("view engine", "ejs");

// routes
app.use(userRouter);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
