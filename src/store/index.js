import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import notifications from "./modules/notifications";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    notifications,
  }
});
