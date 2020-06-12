import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";
import Visualization from "./views/Visualization.vue";
import Home from "./views/Home.vue";

Vue.use(VueRouter)

Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home },
  { path: '/sortVisualization', component: Visualization }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
