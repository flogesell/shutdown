import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    CAIT:[
        {name: "China", total_emissions: 11705.81, co2_emissions: [5214.2, 917.02, 197.57, 672.87]},
        {name: "United States", total_emissions: 5794.35, co2_emissions: [2103.17, 1762.23, 133.24, 385.25]},
        {name: "India", total_emissions: 3346.63, co2_emissions: [1241.34, 305.33, 83.17, 718.7]},
        {name: "Russia", total_emissions: 1992.08, co2_emissions: [844.67, 258.86, 117.21, 95.99]},
        {name: "Indonesia", total_emissions: 1703.86, co2_emissions: [243.35, 154.01, 133.84, 200.24]},
        {name: "Brazil", total_emissions: 1420.58, co2_emissions: [88.44, 191.66, 70.22, 496.1]},
        {name: "Japan", total_emissions: 1154.72, co2_emissions: [561.86, 204.56, 6.8, 21.56]},
        {name: "Iran", total_emissions: 828.34, co2_emissions: [201.29, 139.23, 46.65, 32.74]},
        {name: "Germany", total_emissions: 776.61, co2_emissions: [310.35, 158.3, 8.63, 58.3]},
        {name: "Others", total_emissions: 20555.84, co2_emissions: [6577.74, 4827.08, 2826.97, 5146.13]}
    ]
}

const mutations =  {
}

const actions = {
}

export default {
    state,
    mutations,
    actions
}
