// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import MarvelList from '@/components/MarvelList'
import MarvelChar from '@/components/MarvelChar'
import MarvelLetter from '@/components/MarvelLetter'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MarvelList',
    component: MarvelList
  },
  {
    path: '/char/:id',
    name: 'MarvelChar',
    component: MarvelChar
  },
  {
    path: '/letter/:letra',
    name: 'MarvelLetter',
    component: MarvelLetter
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
