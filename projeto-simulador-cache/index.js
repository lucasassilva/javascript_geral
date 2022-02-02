import express from "express";
const app = express();
const port = 3000;
const cache = {};

const dbFind = (id) => {
    const time = parseInt(Math.random() * 2000);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("DB:" + id + "Tempo:" + time)
        },time);
    });
}

app.get("/", (req, res) => {
    res.send("cache teste");
});

app.get("/get/:id", async (req, res) => {
    const id = req.params.id;
    const now = new Date().getTime();
    if(cache[id] && cache[id].time + 10000 > now) { // cache hit
        res.send((now-cache[id].time) + "Id retornado do cache: " + JSON.stringify(cache[id]));
    } else { // cache miss
      const idValue = await dbFind(req.params.id);
      cache[id] = {
          time: new Date().getTime(),
          value: idValue
      };
      res.send("Id retornado do banco de dados: " + JSON.stringify(cache[id]));
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

