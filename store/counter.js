import axios from "axios";

export const state = () => ({amount: 0})

export const mutations = {
  increment(state) {
    state.amount++
  },
  decrement(state) {
    state.amount--
  },
  setDefault(state, init) {
    state.amount = init;
  }
}

export const actions = {
  async init({commit}) {
    console.log('init');
    const {data} = await axios.get("https://api.ipify.org?format=json");
    commit("setDefault", 99);
  }
}