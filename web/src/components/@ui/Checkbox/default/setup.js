import { toRef, onMounted, watch } from 'vue'

export default {
  name: 'UI-Checkbox',
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { emit } = context
    const proxyValue = toRef(props, 'value')
    watch(
      () => proxyValue.value,
      (val) => emit('input', val)
    )
    return {
      proxyValue,
    }
  },
}
