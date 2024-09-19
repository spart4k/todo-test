import { set, ref, reactive, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'

import { Default as Todo } from '../components/Todo'
import _ from 'lodash'
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
    const removeTodo = (index) => {
      formData.todos.splice(index, 1)
    }
    onMounted(() => {
      console.log(props.entityNote.id, 'props.entityNote.id')
      if (props.entityNote.id) {
        const cloneEntity = _.cloneDeep(props.entityNote)
        for (let key in formData) {
          // formData[key] = props.entityNote[key]
          if (!Array.isArray(key)) {
            set(formData, key, cloneEntity[key])
          } else {
            for (let subKey in key) {
              set(formData[key], subKey, cloneEntity[key][subKey])
            }
          }
        }
      }
    })
    return {
      formData,
      nextTodo,
      todos,
      changeTodo,
      removeTodo,
    }
  },
}
