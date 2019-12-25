import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../src/components/Home.vue";
import vueHelp from "../src/components/vueHelp.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    component: Home
  },
  {
    path: "/",
    component: vueHelp
  }
];
const router = new VueRouter({ mode: "history", routes });
export default router;
