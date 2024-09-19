import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import BtnDefault from '@/components/@ui/Button/default'
import ColorPicker from '@/components/@ui/ColorPicker/default'
import Checkbox from '@/components/@ui/Checkbox/default'

import '@/assets/styles/main.scss'

Vue.component('UI-Btn-Default', BtnDefault)
Vue.component('UI-Color-Picker', ColorPicker)
Vue.component('UI-Checkbox', Checkbox)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
