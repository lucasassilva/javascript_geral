// fetch("pessoas.json")
//   .then(resposta => resposta.json())
//   .then(json => carregaElementosNaPagina(json));

axios.get("pessoas.json")
  .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {

  let table = document.createElement("table");
  let tr = document.createElement("tr");
  table.appendChild(tr);

  for(let x = 1; x <= 3; x++) {
    let th = document.createElement("th");
    tr.appendChild(th);
    th.id = "th_" + x;

    if(th.id == "th_1") {
      th.innerHTML = "Nome";
      th.style.textAlign = "left";
    }

    if(th.id == "th_2") {
      th.innerHTML = "Idade";
      th.style.textAlign = "left";
    }

    if(th.id == "th_3") {
      th.innerHTML = "Salário";
      th.style.textAlign = "left";
    }
  }

  for(let pessoa of json) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);
    
    table.appendChild(tr);
  } 

  const resultado = document.querySelector(".resultado");
  resultado.appendChild(table);

}