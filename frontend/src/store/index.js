import Vue from 'vue'
import Vuex from 'vuex'


import getters from './getters'
import app from './modules/app'
import data from './modules/data'
import sectors from './modules/sectors'
import results from './modules/results'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    data,
    sectors,
    results
  },
  getters
})

export default store
