import express from "express";
import * as path from "path";
const app = express();

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("views", path.resolve(__dirname, "src", "app", "views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
