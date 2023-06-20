const state = {
  user: null,
  isAuth: false,
};
const getters = {
  getUser: state => state.user,
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
      console.log("Login Error!!!");
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
