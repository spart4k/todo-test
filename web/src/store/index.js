import Vue from 'vue'
import Vuex from 'vuex'

import notes from './modules/notes'
import view from './modules/view'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    notes,
    view,
  },
})

export default store
export const useStore = () => {
  return store
}
