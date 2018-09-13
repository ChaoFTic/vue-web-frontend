import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import cart from './modules/cart'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {

  },
  mutations: {

  },
  actions: {

  },

  modules: {
    cart
  },
  getters: getters
})
