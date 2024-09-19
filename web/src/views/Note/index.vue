<template>
  <div class="view view--default">
    <div class="panel justify-between">
      <UI-Btn-Default @click="toPrev" class="mb-5">Назад</UI-Btn-Default>
      <UI-Btn-Default @click="save" class="mb-5">{{ btnName }}</UI-Btn-Default>
    </div>
    <div class="justify-center">
      <Note ref="note" v-if="!loading" :entityNote="entityNote" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router/composables'
import { Default as Note } from '@/components/@logic/Note'
import { v4 as uuidv4 } from 'uuid'

import store from '@/store'

export default {
  name: 'Home-View',
  props: {
    mockData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Note,
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const loading = ref(true)
    const toPrev = () => {
      store.commit('view/setMode', 'left')
      router.push({
        path: '/',
      })
    }
    const entityNote = ref({})
    const note = ref({})
    const btnName = computed(() => {
      const id = entityNote.value.id
      if (id) {
        return 'Сохранить'
      } else {
        return 'Добавить'
      }
    })
    const save = () => {
      toPrev()
      console.log(note.value.formData)
      if (btnName.value === 'Сохранить') {
        store.dispatch('notes/saveNote', {
          id: entityNote.value.id,
          note: note.value.formData,
        })
      } else {
        store.dispatch('notes/addNote', {
          note: {
            id: uuidv4(),
            ...note.value.formData,
          },
        })
      }
    }
    onMounted(() => {
      loading.value = ref(true)
      if (route.meta.mode === 'edit') {
        entityNote.value = store.state.notes.data.find(
          (el) => el.id === route.params.id
        )
      }
      loading.value = false
    })
    return {
      toPrev,
      entityNote,
      loading,
      note,
      save,
      btnName,
    }
  },
}
</script>

<style style="scss" scoped></style>
