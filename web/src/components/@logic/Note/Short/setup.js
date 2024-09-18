import Vue from 'vue'

import { Default as Todo } from '../components/Todo'
export default {
  name: 'Todo-Short',
  components: {
    Todo,
  },
  props: {
    note: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    return {}
  },
}
