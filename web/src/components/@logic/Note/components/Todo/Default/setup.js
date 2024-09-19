import { onMounted, ref, watch } from 'vue'
// import { useStore } from '@/store'
// import { useRoute, useRouter } from 'vue-router/composables'

export default {
  name: 'Note-Edit',
  components: {},
  props: {
    value: {
      type: String,
      default: '',
    },
    todo: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const { emit } = context
    const proxyValue = ref('')
    onMounted(() => {
      proxyValue.value = props.value
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
