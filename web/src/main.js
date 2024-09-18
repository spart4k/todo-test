import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import BtnDefault from '@/components/@ui/Button/default'
import ColorPicker from '@/components/@ui/ColorPicker/default'

import '@/assets/styles/main.scss'

Vue.component('Btn-Default', BtnDefault)
Vue.component('Color-Picker', ColorPicker)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
