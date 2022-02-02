const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const session = require("express-session");
const flash = require("express-flash");
const cookieParser = require("cookie-parser");
const { check, validationResult } = require("express-validator");

// parse application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// session
app.use(session({
    secret: "fksadshaudhweiaskdasdjadadsamdasnd",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

// cookie
app.use(cookieParser("gkasdiqewijaiksasdjaidasdaij"));

// flash
app.use(flash());

// nunjucks
app.set("view engine", "njk");
nunjucks.configure("views", {
    autoescape: true,
    express: app,
});

// rotas
app.get("/", function(req, res) {
   const usuario = req.flash("usuario");
   const senha = req.flash("senha");
   const confirmar_senha = req.flash("confirmar_senha");
   const errors = req.flash("errors");
   res.render("index", { usuario, senha, confirmar_senha, errors });
});

app.post("/form", [
    check("usuario")
    .notEmpty().withMessage("O campo e-mail é obrigatório")
    .isEmail().withMessage("O campo e-mail é inválido"), // check("usuario", "O campo precisa ser um e-mail valido").isEmail(),
    check("senha").isLength({ min: 6 })
    .withMessage("O campo senha precisa conter no minimo 6 caracteres"),
    check("confirmar_senha").notEmpty()
    .withMessage("O campo confirmar senha é obrigatório")
    .custom((value, { req }) => {
        if(value != req.body.senha) {
            throw new Error("As senha devem ser iguais");
        }
        return true;
    })
], (req, res) => {
    const errors = validationResult(req);
    const { usuario, senha, confirmar_senha } = req.body;
    if (!errors.isEmpty()) {
        req.flash("errors", errors.mapped());
        req.flash("usuario", usuario);
        req.flash("senha", senha);
        req.flash("confirmar_senha", confirmar_senha);
        res.redirect("/");
    } else {
        res.send("OK");
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando!");
});