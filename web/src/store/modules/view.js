export default {
  namespaced: true,
  state: {
    transitionMode: 'right',
  },
  mutations: {
    setMode(state, mode) {
      state.transitionMode = mode
      // console.log(currentNote)
    },
  },
}
