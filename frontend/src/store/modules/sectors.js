import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    Traffic: true,
    Energy: true,
    Agriculture: true,
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
        state.Agriculture = true;
        state.Export = true;
        state.Others = true;
    },
    NULL_SECTORS: (state) => {
        state.Traffic = false;
        state.Energy = false;
        state.Agriculture = false;
        state.Export = false;
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
