<template>
  <div class="view view--default">
    <div class="panel">
      <Btn-Default @click="toAdd" class="mb-5">Добавить</Btn-Default>
    </div>
    <List />
  </div>
</template>

<script>
import List from '@/components/@logic/List/Default'
import { useRouter } from 'vue-router/composables'

export default {
  name: 'Home-View',
  components: {
    List,
  },
  setup() {
    const router = useRouter()
    const toAdd = () => {
      router.push('/add')
    }
    return {
      toAdd,
    }
  },
}
</script>

<style style="scss" scoped></style>
