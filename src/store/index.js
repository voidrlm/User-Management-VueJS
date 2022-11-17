import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentUser: {},
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      return (state.currentUser = currentUser);
    },
  },
  actions: {
    setCurrentUser(context, currentUser) {
      if (context.currentUser === currentUser) return;
      context.commit("setCurrentUser", currentUser);
    },

    resetState(context) {
      context.dispatch("setCurrentUser", {});
    },
  },
  getters: {
    currentUser: (state) => state.currentUser,
  },
});

export default store;
