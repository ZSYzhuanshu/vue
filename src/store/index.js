import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import setting from './modules/setting.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    setting,
  },
  getters,
})
