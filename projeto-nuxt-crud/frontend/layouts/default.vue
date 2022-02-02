<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <NuxtLink to="/" class="navbar-brand">
        Toys
      </NuxtLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
           <NuxtLink to="/" class="nav-link">
              Início
          </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/register_toy">
              Cadastrar brinquedos
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>

    <main id="content" class="container p-3 mt-3">
      <Nuxt />
    </main>

    <footer id="footer" class="footer d-flex justify-content-end fixed-bottom bg-light p-4">
      <p class="lead">Desenvolvido com <i class="fa fa-heart text-danger"></i> por <strong>Lucas Alves</strong></p>
    </footer>

  </div>

</template>

<script lang="ts">

import Vue from "vue";

export default Vue.extend({});

</script>

<style scoped>

.lead {
  font-size: 1.2rem;
  font-weight: normal;
}

</style>
