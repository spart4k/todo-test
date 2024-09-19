import { onMounted, toRef, watch } from 'vue'
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
    canRemove: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { emit } = context
    const proxyValue = toRef(props, 'todo')
    const removeTodo = () => {
      emit('removeTodo')
    }
    onMounted(() => {
      // proxyValue.value = props.value
    })
    watch(
      () => proxyValue.value,
      (val) => emit('input', val)
    )
    return {
      proxyValue,
      removeTodo,
    }
  },
}
