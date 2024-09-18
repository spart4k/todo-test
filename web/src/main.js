import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import BtnDefault from '@/components/@ui/Button/default'

import '@/assets/styles/main.scss'

Vue.component('Btn-Default', BtnDefault)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
