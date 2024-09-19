import Vue, { toRef, onMounted, watch } from 'vue'

export default {
  name: 'Color-Picker',
  components: {},
  props: {
    value: {
      type: String,
      default: '#eb0000',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { emit } = context
    const proxyValue = toRef(props, 'value')
    onMounted(() => {
      // proxyValue.value = props.value
    })
    watch(
      () => proxyValue.value,
      (val) => emit('input', val)
    )
    return {
      proxyValue,
    }
  },
}
