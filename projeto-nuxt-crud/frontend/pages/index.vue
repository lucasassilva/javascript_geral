<template>
  <div class="mb-5 p-2">
    <div v-for="toy in toys" :key="toy.id" class="card mb-5" >
      <div class="card-body">
        <div class="card-header">
          <h3 class="display-5">{{ toy.name }}</h3>
          <hr />
          <p class="lead"><strong>Preço do produto:</strong> R${{ toy.price }}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-danger" @click="deleteToy(toy.id)">Deletar</button>
          <NuxtLink class="btn btn-light" :to="'/edit_toy/' + toy.id">
            Editar
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      toys: [],
    }
  },
  async created() {
    try {
      const data = await this.$axios.get("/toys");
      const toys = data.data;
      toys.forEach((toys: any) => {
        this.toys.push(toys);
      });
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async deleteToy(id: any) {
      try{
        await this.$axios.delete("/toys/" + id);
        document.location.reload();
      } catch(err) {
        console.log(err);
      }
    }
  }
})
</script>

<style scoped>

.lead {
  font-size: 1.2rem;
  font-weight: normal;
}

</style>
