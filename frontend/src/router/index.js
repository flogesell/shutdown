import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Style from "../views/Style.vue";
import Diagramm from "../views/Diagramm.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/styleguide",
      name: "Style",
      component: Style,
    },
    {
      path: "/diagramm",
      name: "Diagramm",
      component: Diagramm,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

export default router;
