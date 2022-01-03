import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    Traffic: true,
    Energy: true,
    Agriculture: true,
    Export: true,
    Others: true
}

const mutations =  {
    CHANGE_SECTOR_STATE: (state, data) => {
        state[data.name] = data.status
    },
    RESET: (state) => {
        state.Traffic = true;
        state.Energy = true;
        state.Agriculture = true;
        state.Export = true;
        state.Others = true;
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
