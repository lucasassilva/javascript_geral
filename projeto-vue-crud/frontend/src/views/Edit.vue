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
        <v-btn elevation="2" color="success" @click="carEdit">Editar</v-btn>
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
    carPrice: 0.0,
    cars: [],
  }),
  async created() {
    try {
      const id = parseInt(this.$route.params.id);
      const response = await http.get();
      this.cars = response["data"];
      this.cars.forEach((car) => {
        if (car["id"] == id) {
          this.carName = car["name"];
          this.carBrand = car["brand"];
          this.carPrice = car["price"];
        }
      });
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async carEdit() {
      const id = parseInt(this.$route.params.id);
      await http.put(id, {
        name: this.carName,
        brand: this.carBrand,
        price: this.carPrice,
      });
      this.$router.push({ path: "/" });
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
