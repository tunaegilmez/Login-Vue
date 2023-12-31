const state = {
  user: null,
  isAuth: false,
};
const getters = {
  getUser: state => state.user,
  isAuthUser: state => state.isAuth,
};
const mutations = {
  USER_LOGIN: (state, user) => {
    state.isAuth = true;
    state.user = user;
  },
  USER_LOGOUT: state => {
    state.isAuth = false;
    state.user = null;
  },
};
const actions = {
  login: ({ commit }, user) => {
    const decodedPass = atob(user.password);

    if (user.username === "tuna" && decodedPass === "tuna123") {
      commit("USER_LOGIN", user);
    } else {
      console.log("Vuex login Error!");
      commit("USER_LOGOUT");
    }
  },
  logout: ({ commit }) => {
    commit("USER_LOGOUT");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
