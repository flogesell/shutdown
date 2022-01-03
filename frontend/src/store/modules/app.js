import Vue from 'vue'
import Vuex from 'vuex'

import getCSV from '@/common/get_csv'
import { updateField } from 'vuex-map-fields';

Vue.use(Vuex)

const state = {
    activeTab: 'Per Country',
    activeSpecific: '',
    tabs: ['Per Country', 'Per Sector', 'Per person'],
    info: false,
    loader: true,
    error: false,
}

const mutations =  {
    CHANGE_ACTIVE_TAB: (state, tab) => {
        state.activeTab = tab;
    },
    TOGGLE_INFO: (state) => {
        state.info = !state.info;
    },
    updateField
}

const actions = {
    toggleInfo({ commit }) {
        commit('TOGGLE_INFO')
    },
    changeActiveTab({ commit }, tab) {
        commit('CHANGE_ACTIVE_TAB', tab)
    },
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
}

export default {
    state,
    mutations,
    actions
}
