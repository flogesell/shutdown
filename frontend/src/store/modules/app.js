import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    activeTab: 'world',
    info: false
}

const mutations =  {
    CHANGE_ACTIVE_TAB: (state, tab) => {
        state.activeTab = tab;
    },
    TOGGLE_INFO: (state) => {
        state.info = !state.info;
    }
}

const actions = {
    toggleInfo({ commit }) {
        commit('TOGGLE_INFO')
    },
    changeActiveTab({ commit }, tab) {
        commit('CHANGE_ACTIVE_TAB', tab)
    }
}

export default {
    state,
    mutations,
    actions
}
