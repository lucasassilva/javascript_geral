import "./views/home-view";
import { Router } from "@vaadin/router";

window.addEventListener("load", () => {
  initRouter();
});

function initRouter() {
  const router = new Router(document.querySelector("#content"));

  router.setRoutes([
    {
      path: "/",
      component: "home-view",
    },
    {
      path: "(.*)",
      component: "not-found-view",
      action: () => import("./views/not-found-view"),
    },
  ]);
}
