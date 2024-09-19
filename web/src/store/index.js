import Vue from 'vue'
import Vuex from 'vuex'

import notes from './modules/notes'
import view from './modules/view'
import alert from './modules/alert'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    notes,
    view,
    alert,
  },
})

export default store
export const useStore = () => {
  return store
}
