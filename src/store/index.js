import Vue from "vue";
import Vuex from "vuex";
import auth from "./module/auth.js";

import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersistence({
  key: "auth", // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage

  reducer: modules => ({
    auth: modules.auth,
  }),
});

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  modules: {
    auth,
  },
});
