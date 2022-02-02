<template>
  <v-app>
    <v-app-bar app color="white">
      <div class="d-flex align-center">
        <div class="navbar-brand">
          <router-link to="/">
            <v-img
              alt="Vue"
              class="shrink mr-2"
              contain
              src="./assets/logo.png"
              width="50"
            />
          </router-link>
        </div>
        <div class="nav navbar">
          <v-icon class="nav-item" color="black">mdi-home</v-icon>
          <p class="nav-item black--text"><strong>Início</strong></p>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer app color="indigo" id="navigation">
      <v-list>
        <router-link to="/">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-white">Início</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/cadastrar">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-car</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-white"
                >Cadastrar</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-main id="content">
      <router-view />
    </v-main>

    <v-footer id="footer">
      <p class="text-center">
        Desenvolvido com <v-icon color="red">mdi-heart</v-icon> por
        <strong>Lucas Alves</strong>
      </p>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({}),
});
</script>

<style scoped>
.text-white {
  color: white;
}

#navigation a,
#navigation i {
  text-decoration: none;
  color: white;
}

.navbar {
  display: flex;
  flex-direction: row;
  justify-items: center;
  margin-left: 10px;
  font-size: 1.1rem;
  align-items: center;
}

.navbar p {
  position: relative;
  top: 0.5rem;
}

.nav-item {
  padding: 4px;
}

#footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-size: 1.1rem;
}
</style>
