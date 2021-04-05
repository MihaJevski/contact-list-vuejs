const state = {
  auth: null,
};

const getters = {
  auth: state => state.auth,
};

const mutations = {
  SET_AUTH(state, payload) {
    state.auth = payload;
  },
};

const actions = {
  setAuth({commit}, auth) {
    commit('SET_AUTH', auth);
  },
};

export default {
  state,
  actions,
  getters,
  mutations
};
