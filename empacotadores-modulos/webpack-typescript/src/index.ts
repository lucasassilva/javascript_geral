import somar from "./assets/js/main";

function importAll(r) {
    return r.keys().map(r);
}

importAll(require.context('./assets/js/', false, /\.tsx?$/));
importAll(require.context('./assets/img', false, /\.(svg|png|jpg|jpeg|gif)$/));
importAll(require.context('./assets/sass/', false, /\.s[ac]ss$/i));
importAll(require.context('./assets/fonts/', false, /\.(ttf|otf|eot|svg|woff(2)?)$/));

type Pessoa = {
    nome: string,
    idade: number
};

const pessoa: Pessoa = {
    nome: "Lucas",
    idade: 20
}

console.log(somar(2, 5));
console.log(pessoa.nome);
