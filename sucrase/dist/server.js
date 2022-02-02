"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);

const app = _express2.default.call(void 0, );

// view engine
app.set("view engine", "ejs");
app.set("views", _path2.default.resolve(__dirname, "views"));

// body parser
app.use(_express2.default.static(_path2.default.resolve(__dirname, "../public", "assets")));
app.use(_express2.default.json());

// routes
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});