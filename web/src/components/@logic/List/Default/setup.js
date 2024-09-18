import { reactive } from 'vue'
// import { useStore } from '@/store'
import { useRouter } from 'vue-router/composables'
import store from '@/store'
import { Short as Note } from '@/components/@logic/Note/index.js'

export default {
  name: 'List',
  components: {
    Note,
  },
  props: {},
  setup(props, context) {
    const mockData = store.state.data
    const router = useRouter()
    const openNote = (note) => {
      console.log(note)
      router.push({
        name: 'edit',
        params: {
          id: note.id,
        },
      })
    }
    // const store = useStore()
    // const router = useRouter()
    // const route = useRoute()

    return {
      mockData,
      openNote,
    }
  },
}
