<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            name="email"
            id="email"
            placeholder="E-mail"
            autocomplete="off"
          /><br />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            name="nome"
            id="nome"
            placeholder="Nome"
            autocomplete="off"
          /><br />
        </div>

        <button class="btn btn-primary">Cadastrar</button>

        <h5 class="display-5">{{ parametroDaRota }}</h5>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // this.parametroDaRota = this.$route.params.dado;
  },
  data: () => {
    return {
      parametroDaRota: "Nada",
    };
  },
};
</script>
