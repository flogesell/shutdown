import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Style from "../views/Style.vue";
import Imprint from "../views/Imprint.vue";
import Info from "../views/Info.vue";
import Effects from "../views/Effects.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/styleguide",
      name: "Style",
      component: Style,
    },
    {
      path: "/imprint",
      name: "Imprint",
      component: Imprint,
    },
    {
      path: "/effects",
      name: "Effects",
      component: Effects,
    },
    {
      path: "/info",
      name: "Info",
      component: Info,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

export default router;
