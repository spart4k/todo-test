import { set, ref, reactive, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'

import { Edit as Todo } from '../components/Todo'

export default {
  name: 'Todo-Default',
  components: {
    Todo,
  },
  props: {
    entityNote: {
      type: Object,
    },
  },
  setup(props, context) {
    // const store = useStore()
    // const router = useRouter()
    // const route = useRoute()
    const formData = reactive({
      id: '',
      title: '',
      color: '',
      todos: [
        {
          id: uuidv4(),
          text: '',
        },
      ],
    })
    const todos = ref([''])
    const nextTodo = (index, todo, $event) => {
      const pos = index + 1
      if (pos === formData.todos.length) {
        formData.todos.push({
          id: uuidv4(),
          text: '',
        })
      }
      // $event.preventDefault()
    }
    const changeTodo = (todo, index) => {
      console.log(todo, index)
      set(formData.todos, index, todo)
    }
    onMounted(() => {
      console.log(props.entityNote.id, 'props.entityNote.id')
      if (props.entityNote.id) {
        for (let key in formData) {
          // formData[key] = props.entityNote[key]
          set(formData, key, props.entityNote[key])
        }
      }
    })
    return {
      formData,
      nextTodo,
      todos,
      changeTodo,
    }
  },
}
