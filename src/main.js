// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import MarvelList from '@/components/MarvelList'
import MarvelChar from '@/components/MarvelChar'
import MarvelLetter from '@/components/MarvelLetter'
import NProgress from 'nprogress'

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

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
