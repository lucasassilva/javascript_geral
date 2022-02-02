<template>
  <div class="home">
    <Welcome msg="Bem vindo ao Vue.js" />
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";

export default {
  name: "Home",
  components: {
    Welcome,
  },
};
</script>
