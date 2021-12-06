import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Style from "../views/Style.vue";

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
      path: "*",
      redirect: "/",
    },
  ],
});

export default router;
