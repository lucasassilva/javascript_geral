const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const cookieParser = require("cookie-parser");

// ejs
app.set("view engine", "ejs");

// parse application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// flash
app.use(flash());

// cookie
app.use(cookieParser("dasdajdaoddasd")); // senha que ele vai usar para gerar o cookie

// session
app.use(session({
    secret: 'daisjdadjadaijdaiadjda',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.get("/", (req, res) => {
   let emailError = req.flash("emailError");
   let pontosError = req.flash("pontosError");
   let nomeError = req.flash("nomeError");
   let email = req.flash("email");
   let nome = req.flash("nome");
   let pontos = req.flash("pontos");
   emailError = (emailError == undefined || emailError.length == 0) ? "" : emailError;
   email = (email == undefined || email.length == 0) ? "" : email;
   nome = (nome == undefined || nome.length == 0) ? "" : nome;
   pontos = (pontos == undefined || pontos.length == 0) ? "" : pontos;
   res.render("index", {emailError, pontosError, nomeError, email, nome, pontos});
});

app.post("/form", (req, res) => {
    const { email, nome, pontos } = req.body;

    let emailError;
    let pontosError;
    let nomeError;

    if(email == undefined || email == "") {
        emailError = "O campo e-mail não pode ser vazio";
    }

    if(pontos == undefined || pontos < 20) {
        pontosError = "O campo pontos não pode ter menos de 20 ponto";
    }

    if(nome == undefined || nome == "") {
        nomeError = "O campo nome não pode ser vazio";
    }

    if(nome.length < 4) {
        nomeError = "O campo nome precisa conter no minimo 4 caracteres";
    }

    if(emailError != undefined || pontosError != undefined || nomeError != undefined) {
        req.flash("emailError", emailError);
        req.flash("pontosError", pontosError);
        req.flash("nomeError", nomeError);
        req.flash("email", email);
        req.flash("nome", nome);
        req.flash("pontos", pontos);
        res.redirect("/");
    } else {
        res.send("OK");
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando!");
})