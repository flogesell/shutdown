import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    degrees: [ 
        { heating: 1.5, text: [
            'Extreme weather events such as heat waves or',
            'strong storms and severe weather continue to',
            'increase. About 70% of all coral reefs are',
            'threatend to dissapear. Sea levels are rising',
            'significantly, but the rise is expected to remain',
            'below half a meter by the end of the century.',
            'About every 40 years, the North Pole remains',
            'completely ice-free. Some inhabitants of ',
            'shallower island states will have to be resettled,',
            'and dikes will generally have to be raised.',
            'Overall, however, the consequences are still',
            'considered to be manageable',
        ], img1src: "1_1", img2src: "1_2"}, 
        { heating: 2, text: [
            'A warming of 2°C would result in a substantial',
            'rise in sea level. Millions of people would have',
            'to be permanently resettled, 136 megacities',
            'would be exposed to an increased risk of',
            'flooding.',
            'The existence of entire states such as the',
            'Maldives, Tuvalu or the Marshall Islands would',
            'be threatened, Bangladesh would lose a',
            'considerable part of its territory. 1.7 billion',
            'people would be exposed to severe heat waves,',
            '420 million to extreme heat waves, and another',
            '65 million to deadly heat. Global food supplies',
            'would be threatened, with net losses projected',
            'for staple crops such as corn, rice, and wheat',
            'due to extreme heat and drought',
            
        ], img1src: "2_1", img2src: "2_2"},
        { heating: 3, text: [
            'With a global warming of 3°C, the climate is',
            'warmer than ever before in human history. The',
            'West Antarctic ice sheet will not be able to with-',
            'stand these temperatures. Sea levels will rise by',
            'more than half a meter by the end of the cen-',
            'tury. Around one billion people are likely to be',
            'directly affected, including the inhabitants of the',
            'metropolises of New York, Mumbai, Shanghai',
            'and Hamburg.',
            'regions would be drastically reduced. Much of',
            'the worlds wildlife would be wiped out and the',
            'Amazon rainforest would collapse completely.',
        ], img1src: "3_1", img2src: "3_2"},
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