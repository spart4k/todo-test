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
import { useRoute, useRouter } from 'vue-router/composables'
import { onMounted } from 'vue'

export default {
  name: 'Home-View',
  props: {
    mockData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    List,
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const toAdd = () => {
      router.push({
        name: 'add',
      })
    }
    onMounted(() => {
      console.log(route)
    })
    return {
      toAdd,
      route,
    }
  },
}
</script>

<style style="scss" scoped></style>
