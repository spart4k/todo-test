<template>
  <div class="view view--default">
    <div class="panel">
      <Btn-Default @click="toAdd" class="mb-5">Добавить</Btn-Default>
    </div>
    asdasd
    <!-- <Note /> -->
  </div>
</template>

<script>
// import { Default as Note } from '@/components/@logic/Note'
import { useRouter } from 'vue-router/composables'

export default {
  name: 'Home-View',
  components: {
    // Note,
  },
  setup() {
    const router = useRouter()
    const toAdd = () => {
      router.push({
        path: '/add',
      })
    }
    return {
      toAdd,
    }
  },
}
</script>

<style style="scss" scoped></style>
