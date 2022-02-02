<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="card-header">
          <form>
            <div class="form-group mb-3">
              <label for="name">Nome: </label>
              <input
                id="name"
                v-model="toyName"
                type="text"
                class="form-control"
                name="name"
                autocomplete="off"
              />
            </div>
            <div class="form-group mb-3">
              <label for="price">Preço: </label>
              <input
                id="price"
                v-model="toyPrice"
                type="text"
                class="form-control"
                name="price"
                autocomplete="off"
              />
            </div>
            <button type="button" class="btn btn-info mt-3" @click="updateToy">Editar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      toyName: '',
      toyPrice: 0,
    }
  },

  async created() {
    try {
      const data = await this.$axios.get('/toys')
      const toys = data.data
      toys.forEach((t: any) => {
        if (t.id === this.$route.params.id) {
          this.toyName = t.name
          this.toyPrice = t.price
        }
      })
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async updateToy() {
      try {
        await this.$axios.put('/toys/' + this.$route.params.id, {
          name: this.toyName,
          price: this.toyPrice,
        });
        this.$router.push({ name: "index"});
      } catch (err) {
        console.log(err)
      }
    },
  },
})
</script>

<style scoped>
.lead {
  font-size: 1.2rem;
  font-weight: normal;
}
.form-control:focus,
.custom-select:focus,
.form-control-file:focus {
  border-color: #2196f3;
  box-shadow: inset 0 -2px 0 -1px #2196f3;
  outline: 0;
}
</style>
