import Concessionaria from "./Concessionaria";
import { Dao } from "./Dao";
import Pessoa from "./Pessoa";
//import { PessoaDao } from "./PessoaDao";
//import { ConcessionariaDao } from "./ConcessionariaDao";

//let dao = new ConcessionariaDao();
//let dao2 = new PessoaDao();

let concessionaria: Concessionaria = new Concessionaria('', []);
let pessoa: Pessoa = new Pessoa('', '');

let dao3:Dao<Concessionaria> = new Dao<Concessionaria>();
let dao4:Dao<Pessoa> = new Dao<Pessoa>();

dao3.inserir(concessionaria);
dao4.remover(5);
