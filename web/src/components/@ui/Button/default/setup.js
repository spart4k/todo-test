import Vue from 'vue'

export default {
  name: 'UI-Btn-Default',
  components: {},
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    type: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    return {}
  },
}
