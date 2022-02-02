const Reader = require('./classes/Reader');
const Processor = require('./classes/Processor');
const Table = require('./classes/Table');
const HtmlParser = require("./classes/HtmlParser");
const Writer = require("./classes/Writer");
const PDFWriter = require("./classes/PDFWriter");

let leitor = new Reader();
let escritor = new Writer();

async function main() {
    let dados = await leitor.Read('./users.csv');
    let dadosProcessados = Processor.Process(dados);
    let usuarios = new Table(dadosProcessados);
    let html = await HtmlParser.Parse(usuarios);
    escritor.write(Date.now() + ".html", html);
    PDFWriter.WritePDF(Date.now() + ".PDF", html);
} 

main();

