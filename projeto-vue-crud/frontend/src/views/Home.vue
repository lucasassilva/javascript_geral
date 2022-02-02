<template>
  <v-container class="container">
    <v-card class="card">
      <Car />
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Car from "../components/car/Car.vue";

export default Vue.extend({
  components: { Car },
  data: () => ({}),
});
</script>

<style scoped>
.card {
  padding: 20px;
}
.container {
  margin-top: 15px;
}

.divider {
  margin-bottom: 15px;
}
</style>
