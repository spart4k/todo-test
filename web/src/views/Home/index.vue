<template>
  <div class="view view--default">
    <div class="panel">
      <UI-Btn-Default @click="toAdd" class="mb-5">Добавить</UI-Btn-Default>
    </div>
    <List />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router/composables'

import List from '@/components/@logic/List/Default'
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
    List,
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const toAdd = () => {
      store.commit('view/setMode', 'right')
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
