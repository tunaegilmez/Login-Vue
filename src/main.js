import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueCryptojs from "vue-cryptojs";

import "../src/index.css";

Vue.config.productionTip = false;

Vue.use(VueCryptojs);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
