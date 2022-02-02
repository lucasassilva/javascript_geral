const fs = require("fs").promises;
const path = require("path");

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(path.resolve(rootDir));
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath); // coletar alguns dados a respeito dos arquivos
        if(/\.git/g.test(fileFullPath)) continue; // pular diretorios que contem .git
        if(/node_modules/g.test(fileFullPath)) continue; // pular diretorios que contem o node_modules
        if(stats.isDirectory()) { // descreve se é um diretorio(true) ou não (false)
            readdir(fileFullPath); // ler os diretorios do caminho
            continue
        } 
        if(!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) continue; // selecionar apenas arquivos html e css
        console.log(file, stats.isDirectory());
    }
}

readdir("../../../FIXACAO/NODE");