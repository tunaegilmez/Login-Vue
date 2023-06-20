import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../components/TheLogin.vue";
import Greeting from "../components/TheGreeting.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/greeting",
    name: "Greeting",
    component: Greeting,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
