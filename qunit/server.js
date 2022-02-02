const express = require ("express");

const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.status(200).send("ok");
});

app.listen(port, function () {
  console.log(`Servidor rodando em http://localhost:${3000}`);
});
