import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from "../views/Sobre.vue";
import Cadastro from "../views/Cadastro.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },

  {
    path: "/cadastro/",
    name: "Cadastro",
    component: Cadastro,
    children: [
      {
        path: "lima",
        name: "Lima",
        component: Sobre
      }
    ]
  }

  // passando parametros pela rota
  // {
  //   path: "/cadastro/:dado",
  //   name: "Cadastro",
  //   component: Cadastro
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
