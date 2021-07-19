import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App2.vue'

import { i18n } from 'DataVisioner'

import router from '@/router'
new Vue({
  router,
  i18n,
  el: '#app', // equivalent to mount
  render: h => h(App)
})
