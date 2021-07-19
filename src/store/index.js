import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import app from './modules/app'
import chart from './modules/chart'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    app,
    chart
  },
  getters
})

store.commit('app/SET_LANG', 'CN')

export default store
