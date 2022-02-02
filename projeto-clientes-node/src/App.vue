<template>
  <div id="app">
    <div class="container mt-5">
      <h3>Cadastrar clientes</h3>
      <hr />
      <div class="card">
        <div class="card-body">
          <span id="nomeError" v-show="deuErro"
            >O nome é inválido, tente novamente!</span
          ><br />
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Nome"
              v-model="nomeField"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="E-mail"
              v-model="emailField"
            />
          </div>

          <div class="form-group">
            <input
              type="number"
              class="form-control"
              placeholder="Idade"
              v-model="idadeField"
            />
          </div>

          <button class="btn btn-secondary mt-3" @click="cadastrarUsuario">
            Cadastrar
          </button>
        </div>
      </div>

      <div
        class="card mt-5 mb-5"
        v-for="(cliente, index) in orderClientes"
        :key="cliente.id"
      >
        <div class="card-body">
          <h3>{{ index + 1 }}</h3>
          <Cliente
            v-bind:cliente="cliente"
            v-bind:showIdade="true"
            @meDelete="deletarUsuario($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import Cliente from "./components/Cliente";
//import Produto from "./components/Produto";

export default {
  name: "App",
  data() {
    return {
      deuErro: false,
      nomeField: "",
      emailField: "",
      idadeField: 0,
      clientes: [
        {
          id: 1,
          nome: "Neves da Silva",
          email: "neves209@outlook.com",
          idade: 35,
        },
        {
          id: 2,
          nome: "Valter Ribeiro",
          email: "valterr220@outlook.com",
          idade: 27,
        },
        {
          id: 3,
          nome: "Gilberto Silva",
          email: "gilbertosilva91@gmail.com",
          idade: 30,
        },
        {
          id: 4,
          nome: "Gabriel Oliveira",
          email: "gabriel720@outlook.com",
          idade: 24,
        },
      ],
    };
  },
  components: {
    Cliente,
    //Produto
  },
  methods: {
    cadastrarUsuario: function () {
      if (
        this.nomeField == "" ||
        this.nomeField == " " ||
        this.nomeField.length < 3
      ) {
        this.deuErro = true;
      } else {
        this.clientes.push({
          id: Date.now(),
          nome: this.nomeField,
          email: this.emailField,
          idade: this.idadeField,
        });
        this.nomeField = "";
        this.emailField = "";
        this.idadeField = "";
        this.deuErro = false;
      }
    },
    deletarUsuario: function (event) {
      console.log("Recebendo evento!");
      let id = event.idDoCliente;
      let novoArray = this.clientes.filter((cliente) => cliente.id != id);
      this.clientes = novoArray;
    },
  },
  computed: {
    orderClientes: function () {
      return _.orderBy(this.clientes, ["nome"], ["asc"]);
    },
  },
};
</script>

<style scoped>
#nomeError {
  color: red;
}
</style>
