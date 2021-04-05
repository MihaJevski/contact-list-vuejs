const state = {
  errorMessages: [],
  successMessages: [],
};

const getters = {
  getErrorMessages: state => state.errorMessages,
  getSuccessMessages: state => state.successMessages,
};

const mutations = {
  SET_ERROR_MESSAGES(state, payload) {
    state.errorMessages = payload;
  },
  SET_SUCCESS_MESSAGES(state, payload) {
    state.successMessages = payload;
  },
};

const actions = {
  setErrorMessages({commit}, messages) {
    commit('SET_ERROR_MESSAGES', messages);
  },
  setSuccessMessages({commit}, message) {
    commit('SET_SUCCESS_MESSAGES', message);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
