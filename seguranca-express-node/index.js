// Carregando modulos
const helmet = require("helmet");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// hbs
app.set("view engine", "hbs");

// helmet
app.use(helmet());

// csrf
app.use(cookieParser());
app.use(csrf({ cookie: true }));

app.use((err, req, res, next) => {
  if (err.code !== "EBADCSRFTOKEN") return next(err);
  res.status(403);
  res.send("formulário adulterado");
});

app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
});

// routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => console.log("Servidor rodando!"));
