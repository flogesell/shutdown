import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    Traffic: true,
    Energy: true,
    Agriculture: true,
    Export: false,
    Others: true
}

const mutations =  {
    CHANGE_SECTOR_STATE: (state, data) => {
        state[data.name] = data.status
    }
}

const actions = {
    changeState({ commit }, data) {
        commit('CHANGE_SECTOR_STATE', data)
    }
}

export default {
    state,
    mutations,
    actions
}
