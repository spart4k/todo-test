<template>
  <div id="app">
    <router-view />
    <input v-model="theme" type="checkbox" />
  </div>
</template>

<script>
import { nextTick, onMounted, ref, watch } from 'vue'
export default {
  name: 'App',
  components: {},
  setup() {
    const theme = ref(false)
    watch(
      () => theme.value,
      (val) => {
        console.log(val)
        setTheme(val)
      }
    )
    const setTheme = (val) => {
      console.log('asdas')
      document.documentElement.setAttribute('theme', val ? 'light' : 'dark')
    }
    onMounted(() => {
      console.log('dark')
      setTheme(false)
    })
    return {
      theme,
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
}
</style>
