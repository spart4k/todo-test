export default {
  namespaced: true,
  state: {
    isShow: false,
    text: '',
    id: null,
  },
  mutations: {
    setShow(state, data) {
      for (let key in data) {
        state[key] = data[key]
      }
    },
  },
  actions: {},
}
