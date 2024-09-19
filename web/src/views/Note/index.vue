<template>
  <div class="view view--default">
    <div class="panel justify-between">
      <Btn-Default @click="toPrev" class="mb-5">Назад</Btn-Default>
      <Btn-Default @click="save" class="mb-5">{{ btnName }}</Btn-Default>
    </div>
    <Note ref="note" v-if="!loading" :entityNote="entityNote" />
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router/composables'
import store from '@/store'
import { Default as Note } from '@/components/@logic/Note'

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
      store.dispatch('notes/saveNote', {
        id: entityNote.value.id,
        note: note.value.formData,
      })
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
