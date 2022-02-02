const express = require("express");
const userRouter = require("./src/routes/user.routes");
const path = require("path");
const app = express();

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "src", "app", "views"));

app.use(userRouter);

const server = app.listen(3000, (err) => {
  if (err) console.log(err);
  const host = server.address().address;
  const port = server.address().port;
  console.log("Servidor rodando em http://" + host + ":" + port);
});
