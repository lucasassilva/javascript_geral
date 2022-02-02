import express from "express";
import path from "path";

const app = express();

// view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

// body parser
app.use(express.static(path.resolve(__dirname, "../public", "assets")));
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});