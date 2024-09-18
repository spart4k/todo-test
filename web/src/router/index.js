import Vue from 'vue'
import VueRouter from 'vue-router'
import { HomeView, NoteView } from '@/views'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'blank-layout',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeView,
  },
  {
    path: '/add',
    name: 'add',
    meta: {
      layout: 'blank-layout',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NoteView,
  },
]

// Добавил фикс для варнингов - причина не известна, решение: https://stackoverflow.com/questions/62462276/how-to-solve-avoided-redundant-navigation-to-current-location-error-in-vue
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: './',
  routes,
})

export default router
