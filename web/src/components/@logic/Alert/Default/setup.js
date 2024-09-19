import store from '@/store'
import { computed, ref, onMounted } from 'vue'

export default {
  name: 'Alert-Default',
  components: {},
  props: {},
  setup(props, context) {
    const isShow = computed(() => store.state.alert.isShow)
    const text = computed(() => store.state.alert.text)
    const closeAlert = () => {
      store.commit('alert/setShow', {
        isShow: false,
        text: ``,
        id: null,
      })
    }
    const success = () => {
      console.log('succ')
      store.dispatch('notes/removeNote', store.state.alert.id)
      closeAlert()
    }
    return {
      isShow,
      text,
      closeAlert,
      success,
    }
  },
}
