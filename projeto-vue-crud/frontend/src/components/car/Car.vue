<template>
  <div class="table">
    <v-data-table
      :headers="headers"
      :items="cars"
      :sort-by.sync="columnName"
      :sort-asc.sync="isAsc"
      :footer-props="{
        showFirstLastPage: true,
        'items-per-page-text': 'carros por página',
      }"
      locale="pt"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.name }}</td>
          <td>{{ row.item.brand }}</td>
          <td>{{ row.item.price }}</td>
          <td id="actions">
            <router-link class="edit" :to="'/editar/' + row.item.id">
              <v-btn class="mx-1" icon fab dark small color="orange">
                <v-icon dark>mdi-pencil</v-icon>
              </v-btn>
            </router-link>
            <router-link class="delete" :to="'/deletar/' + row.item.id">
              <v-btn
                class="mx-1"
                fab
                dark
                small
                icon
                color="red"
                @click="dialog = true"
              >
                <v-icon dark>mdi-delete</v-icon>
              </v-btn>
            </router-link>
          </td>
        </tr>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="390">
      <v-card>
        <v-card-title class="text-h6">
          Deseja excluir esse carro ?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialog = false">Não</v-btn>
          <v-btn color="success" text @click="carDelete()"> Sim </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CarService from "../../components/car/services/CarService";

const http = new CarService();

export default Vue.extend({
  data: () => ({
    columnName: "name",
    isAsc: true,
    dialog: false,
    cars: [],
    headers: [
      {
        text: "Nome",
        align: "center",
        value: "name",
      },
      { text: "Marca", align: "center", value: "brand" },
      { text: "Preço", align: "center", value: "price" },
      { text: "Ações", align: "center", sortable: false },
    ],
  }),
  async created() {
    try {
      const response = await http.get();
      this.cars = response["data"];
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async carDelete() {
      try {
        const id = parseInt(this.$route.params.id);
        await http.delete(id);
        const car = this.cars.findIndex((car) => car["id"] === id);
        this.cars.splice(car, 1);
        this.dialog = false;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
</script>

<style scoped>

.table {
  text-align: center;
}

.delete,
.edit {
  text-decoration: none;
}
</style>
