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
    intro: false,
    loader: true,
    error: false,
    logoSwitch: false,
    infoboxHeadline: '',
    infoboxOpen: false
}

const mutations =  {
    CHANGE_ACTIVE_TAB: (state, tab) => {
        state.activeTab = tab;
    },
    CHANGE_INFOBOX_HEADLINE: (state, headline) => {
        state.infoboxHeadline = headline;
    },
    TOGGLE_INFOBOX: (state) => {
        state.infoboxOpen = !state.infoboxOpen;
    },
    OPEN_INFOBOX: (state) => {
        state.infoboxOpen = false;
        setTimeout(() => { state.infoboxOpen = true; }, 500);      
    },
    CHANGE_INTRO: (state) => {
        state.intro = !state.intro;
    },
    CHANGE_LOGO_SWITCH: (state) => {
        state.logoSwitch = !state.logoSwitch;
    },
    TOGGLE_INFO: (state) => {
        state.info = !state.info;
    },
    RESET_ACTIVE_SPECIFIC: () => {
        state.activeSpecific = '';
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
        }
      }
}

export default {
    state,
    mutations,
    actions
}
