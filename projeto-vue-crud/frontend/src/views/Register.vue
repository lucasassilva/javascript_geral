<template>
  <v-container class="container">
    <v-card class="card">
      <v-form>
        <v-text-field
          type="text"
          v-model="carName"
          label="Nome do carro"
          name="name"
          required
          autocomplete="off"
        ></v-text-field>
        <v-text-field
          type="text"
          v-model="carBrand"
          label="Marca do carro"
          name="Marca do carro"
          required
          autocomplete="off"
        ></v-text-field>
        <v-text-field
          type="number"
          v-model="carPrice"
          label="Preço do carro"
          name="Preço do carro"
          required
          autocomplete="off"
        >
        </v-text-field>
        <v-btn elevation="2" color="success" @click="carCreate"
          >Cadastrar</v-btn
        >
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import CarService from "../components/car/services/CarService";

const http = new CarService();

export default Vue.extend({
  data: () => ({
    carName: "",
    carBrand: "",
    carPrice: 0,
  }),
  methods: {
    clear() {
      this.carName = "";
      this.carBrand = "";
      this.carPrice = 0;
    },
    async carCreate() {
      try {
        await http.post({
          name: this.carName,
          brand: this.carBrand,
          price: this.carPrice,
        });
        this.clear();
        this.$router.push({ path: "/" });
      } catch (err) {
        console.log(err);
      }
    },
  },
});
</script>

<style scoped>
.divider {
  margin-bottom: 20px;
}

.container {
  margin-top: 15px;
}

.card {
  padding: 20px;
}
</style>
