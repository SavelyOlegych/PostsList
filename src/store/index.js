import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      authorFilterValue: "",
    };
  },
  mutations: {
    setAuthorFilterValue(state, newValue) {
      state.authorFilterValue = newValue;
    },
  },
});
