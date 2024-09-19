import Vue from 'vue'

import { Default as Todo } from '../components/Todo'

import store from '@/store'

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
  setup(props) {
    const removeNote = () => {
      const { id, title } = props.note
      // store.dispatch('notes/removeNote', {
      //   id,
      //   title,
      // })
      store.commit(
        'alert/setShow',
        {
          isShow: true,
          text: `Вы действительно хотите удалить заметку "${title}"?`,
          id,
        },
        { root: true }
      )
    }
    return {
      removeNote,
    }
  },
}
