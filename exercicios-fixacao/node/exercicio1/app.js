const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.json");
const escreve = require("./modules/escrever");
const ler = require("./modules/ler");

const pessoas = [
    { nome: "João" },
    { nome: "Maria" },
    { nome: "Jorge" },
    { nome: "Ana" }
]

const json = JSON.stringify(pessoas, "", 2);
escreve(caminhoArquivo, json, "utf8");

async function lerArquivo(caminho, encoding) {
    const dados = await ler(caminho, encoding);
    renderizarDados(dados);
}

function renderizarDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => {
        console.log(val);
    });
}

lerArquivo(caminhoArquivo, "utf8")

