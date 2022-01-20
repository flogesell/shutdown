import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    degrees: [ 
        { heating: "1,5", text: 'Extreme weather events such as heat waves, droughts, storm surges and floods continue to increase. About 70% - 90% of all coral reefs would be severely threatened in their existence. About every 40 years, the Arctic summer will remain ice-free. The sea level will rise significantly, inhabitants of some shallow island states will have to be resettled. However, the rise will probably remain below half a meter by the end of the century. Overall, the consequences are still considered to be manageable.',
        img1src: "1_1", img2src: "1_2"}, 
        { heating: "2", text:
            'A warming of 2°C would result in a substantial rise in sea level. Millions of people would have to be permanently resettled, 136 megacities would be exposed to an increased risk of flooding. The existence of entire states such as the Maldives, Tuvalu or the Marshall Islands would be threatened, Bangladesh would lose a considerable part of its territory. 1.7 billion people would be exposed to severe heat waves, 420 million to extreme heat waves, and another 65 million to deadly heat. Global food supplies would be threatened, with net losses projected for staple crops such as corn, rice, and wheat due to extreme heat and drought.'
            , img1src: "2_1", img2src: "2_2"},
        { heating: "2,5", text: 
            'With a global warming of over 2.5°C , the climate is warmer than ever before in human history. The West Antarctic ice sheet will not be able to withstand these temperatures. Sea levels will rise by more than half a meter by the end of the century. Around one billion people are likely to be directly affected, including the inhabitants of the metropolises of New York, Mumbai, Shanghai and Hamburg. Much of the worlds wildlife would be wiped out and the Amazon rainforest would collapse completely.',
            img1src: "3_1", img2src: "3_2"},
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