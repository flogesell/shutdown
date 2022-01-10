import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    CAIT: [
        { name: "China",         iso: "CHN",   total_emissions: 11705.81, co2_emissions: [5214.2,   917.02,  672.87, 4901.72] },
        { name: "United States", iso: "USA",   total_emissions:  5794.35, co2_emissions: [2103.17, 1762.23,  385.25, 1543.70] },
        { name: "India",         iso: "IND",   total_emissions:  3346.63, co2_emissions: [1241.34,  305.33,  718.70, 1081.26] },
        { name: "Russia",        iso: "RUS",   total_emissions:  1992.08, co2_emissions: [ 844.67,  258.86,   95.99,  792.56] },
        { name: "Indonesia",     iso: "IDN",   total_emissions:  1703.86, co2_emissions: [ 243.35,  154.01,  200.24, 1172.66] },
        { name: "Brazil",        iso: "BRA",   total_emissions:  1420.58, co2_emissions: [  88.44,  191.66,  496.10,  644.38] },
        { name: "Japan",         iso: "JPN",   total_emissions:  1154.72, co2_emissions: [ 561.86,  204.56,   21.56,  366.74] },
        { name: "Iran",          iso: "IRN",   total_emissions:   828.34, co2_emissions: [ 201.29,  139.23,   32.74,  455.08] },
        { name: "Germany",       iso: "GER",   total_emissions:   776.61, co2_emissions: [ 310.35,  158.30,   58.30,  249.66] },
        { name: "Others",        iso: "OTHER", total_emissions: 20555.84, co2_emissions: [6577.74, 4827.08, 5146.13, 4004.89] }
    ],
    population: [
        { name: "China",         population: 1433.784 },
        { name: "United States", population:  329.065 },
        { name: "India",         population: 1366.418 },
        { name: "Russia",        population:  145.872 },
        { name: "Indonesia",     population:  270.626 },
        { name: "Brazil",        population:  211.050 },
        { name: "Japan",         population:  126.860 },
        { name: "Iran",          population:   82.914 },
        { name: "Germany",       population:   83.517 },
        { name: "Others",        population: 3580.448 }
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
