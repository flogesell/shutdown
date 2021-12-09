import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';
import getCSV from '../common/get_csv'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
    loader: true,
    error: false
  },
  mutations: {
    updateField
  },
  actions: { 
    async fetchData({ state }) {
      try {
         await getCSV(`/data/CW_HistoricalEmissions_CAIT.csv`).then((response) => {
            state.data = response
            state.loader = false;
         })
      } catch (e) {
         state.error = true;
         console.log(e)
      }
    }
  },
  getters: {
    getField,

    getData:
      state => state.data
  },
})
