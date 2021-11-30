import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// routs
import Home from './views/Home.vue'
import Style from './views/Style.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/style', component: Style }
  ]
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
