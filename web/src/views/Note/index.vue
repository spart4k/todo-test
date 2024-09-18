<template>
  <div class="view view--default">
    <div class="panel justify-between">
      <Btn-Default @click="toPrev" class="mb-5">Назад</Btn-Default>
      <Btn-Default @click="save" class="mb-5">Сохранить</Btn-Default>
    </div>
    <Note ref="note" v-if="!loading" :entityNote="entityNote" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
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
      router.push({
        path: '/',
      })
    }
    const entityNote = ref({})
    const note = ref({})
    const save = () => {
      console.log(note.value)
      store.dispatch('saveNote', {
        id: entityNote.value.id,
        note: note.value.formData,
      })
    }
    onMounted(() => {
      loading.value = ref(true)
      if (route.meta.mode === 'edit') {
        console.log(store.state)
        entityNote.value = store.state.data.find(
          (el) => el.id === route.params.id
        )
        console.log(entityNote.value)
      }
      loading.value = false
    })
    return {
      toPrev,
      entityNote,
      loading,
      note,
      save,
    }
  },
}
</script>

<style style="scss" scoped></style>
