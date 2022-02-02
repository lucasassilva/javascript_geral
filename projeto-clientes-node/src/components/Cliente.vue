<template>
  <div v-bind:class="{ cliente: !isPremium, 'cliente-premium': isPremium }">
    <h5><strong>Nome:</strong> {{ cliente.nome }}</h5>
    <hr />
    <p class=""><strong>Email:</strong> {{ cliente.email }}</p>
    <!-- simbolo | é o pipe -->
    <p class="" v-if="showIdade === true">
      <strong>Idade:</strong> {{ cliente.idade }}
    </p>
    <p class="" v-else>O usuário escondeu a idade!</p>
    <button class="btn btn-secondary mr-2" @click="mudarCor($event)">
      Mudar a cor!
    </button>
    <button class="btn btn-light" @click="emitirEventoDelete">Deletar</button>
    <h5 class="mt-4"><strong>Id especial: </strong> {{ idEspecial }}</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPremium: false,
    };
  },
  props: {
    cliente: Object,
    showIdade: Boolean,
  },
  methods: {
    mudarCor: function (event) {
      console.log(event);
      this.isPremium = !this.isPremium;
    },
    emitirEventoDelete: function () {
      console.log("Emitindo do filho!");
      this.$emit("meDelete", {
        idDoCliente: this.cliente.id,
        curso: "Formação Node.js",
        emPromocao: true,
        component: this,
      });
    },
    testar: function () {
      console.log("Testando para valer!");
      alert("Isso é um alert!");
    },
  },
  // Vue 3 filter foi descontinuado
  // filters: {
  //   processarEmail: function(value) {
  //     return value.toUpperCase();
  //   }
  // }
  computed: {
    idEspecial: function () {
      return (String(Date.now()) + this.cliente.id).toUpperCase();
    },
  },
};
</script>

<style scoped>
.cliente {
  background-color: #ece5e3;
  padding: 2%;
}

.cliente-premium {
  background-color: black;
  color: yellow;
  padding: 2%;
}
</style>
