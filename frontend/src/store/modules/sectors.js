import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    Traffic: true,
    Energy: true,
    Agrar: true,
    Others: true,
    Export: true
}

const mutations =  {
    CHANGE_SECTOR_STATE: (state, data) => {
        state[data.name] = data.status
    },
    RESET: (state) => {
        state.Traffic = true;
        state.Energy = true;
        state.Agrar = true;
        state.Export = true;
        state.Others = true;
    },
    NULL_SECTORS: (state) => {
        state.Traffic = false;
        state.Energy = false;
        state.Agrar = false;
        state.Export = true;
        state.Others = false;
    }
}

const actions = {
    changeState({ commit }, data) {
        commit('CHANGE_SECTOR_STATE', data)
    },
    nullSectors({ commit }) {
        commit('NULL_SECTORS')
    }
}

export default {
    state,
    mutations,
    actions
}
