const polka = require("polka");
const ejs = require("polka-ejs");
const path = require("path");
const serverStatic = require("serve-static"); //serve static is needed to serve static files  
const app = polka();
const bodyParser = require("body-parser");

// view engine
app.use(ejs({
    views: path.resolve(__dirname, "src", "views"),
    ext: "ejs",
}));

// static files
app.use(serverStatic(path.join(__dirname, "public", "assets")));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  
    extended: true
}));

// routes
app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", (req, res) => {
    res.write(JSON.stringify(req.body));
    res.end();
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});