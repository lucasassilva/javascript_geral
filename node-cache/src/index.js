import express from "express";
import fetch from "node-fetch";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 10 }); // 100 segundos cache vai permanecer na memoria

const app = express();
const port = 3000;

const url = "https://swapi.dev/api/starships";

app.get("/todos", async (req, res) => {
  if(cache.has("todos")) {
      console.log("Obtendo do cache");
      return res.send(cache.get("todos"));
  } else {
    const json = await (await fetch(url)).json();
    cache.set("todos", json);
    console.log("Obtendo da API");
    res.send(json);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
