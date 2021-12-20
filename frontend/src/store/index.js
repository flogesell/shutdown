import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import data from './modules/data'
import sectors from './modules/sectors'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    data,
    sectors
  },
  getters
})

export default store
