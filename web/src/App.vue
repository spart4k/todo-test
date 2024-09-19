<template>
  <div id="app">
    <transition :name="`sheet-chapter-${transitionName}`">
      <router-view />
    </transition>
    <input v-model="theme" type="checkbox" />
  </div>
</template>

<script>
import { onMounted, computed, ref, watch } from 'vue'
import store from '@/store'

export default {
  name: 'App',
  components: {},
  setup() {
    const theme = ref(false)
    watch(
      () => theme.value,
      (val) => {
        setTheme(val)
      }
    )
    const setTheme = (val) => {
      document.documentElement.setAttribute('theme', val ? 'light' : 'dark')
    }
    const transitionName = computed(() => store.state.view.transitionMode)
    onMounted(() => {
      setTheme(false)
    })
    return {
      theme,
      transitionName,
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  margin-top: 60px;
  position: relative;
  // padding-inline: 5rem;
}
</style>
