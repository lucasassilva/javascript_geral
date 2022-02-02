import express from "express";
import redis from "redis";
import fetch from "node-fetch";

const app = express();
const port = 3000;
const cache = redis.createClient();

const url = "https://swapi.dev/api/planets";

cache.on("connect", () => {
  console.log("conectado com redis com sucesso");
});

cache.on("error", (err) => {
  console.log(err);
});

app.get("/todos", (req, res) => {
  cache.get("todos", async (_, apply) => {
      if(apply != null) { // cache 4ms 
        console.log("Obtendo do cache");
        res.json(JSON.parse(apply));
      } else { // sem cache 1131 ms        
        const json = await (await fetch(url)).json();
        cache.set("todos", JSON.stringify(json), "EX", 10);
        console.log("Obtendo da API");
        res.send(json);
      }
  })
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
