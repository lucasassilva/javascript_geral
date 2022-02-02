import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Edit from "../views/Edit.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/deletar/:id",
    name: "Delete",
    component: Home,
  },
  {
    path: "/cadastrar",
    name: "Register",
    component: Register,
  },
  {
    path: "/editar/:id",
    name: "Edit",
    component: Edit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
