<template>
    <div class="icon" :class="[ activated ? 'activated' : 'inactive' ]" >
        <svg v-if="icon==='reset'" xmlns="http://www.w3.org/2000/svg" width="25.414" height="27.981" viewBox="0 0 25.414 27.981">
            <path id="Vereinigungsmenge_8" data-name="Vereinigungsmenge 8" d="M-3978.929,1414.152c-3.583-3.216-8.52-3.786-11.687-3.767v8.216l-9.384-10.8,9.384-10.8v8.346c4.809.295,13.616,1.64,14.862,7.5,1.727,8.122-11.146,11.135-11.146,11.135S-3973.235,1419.263-3978.929,1414.152Z" transform="translate(4000.5 -1396.5)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        </svg>
        <svg v-if="icon==='sectors'" xmlns="http://www.w3.org/2000/svg" width="23.105" height="31.638" viewBox="0 0 23.105 31.638">
            <path id="Icon_ionic-ios-flag" data-name="Icon ionic-ios-flag" d="M29.177,5.713c-.224.036-.462.072-.715.1a42.549,42.549,0,0,1-4.374.375,26.56,26.56,0,0,1-5.645-.881A27.646,27.646,0,0,0,12.626,4.5c-4.057,0-5.435.873-5.58.967l-.3.209V35.1a1.03,1.03,0,0,0,.888,1.032,1.01,1.01,0,0,0,1.133-1V20.062a.587.587,0,0,1,.462-.57,17.515,17.515,0,0,1,3.393-.282c1.891,0,3.66.722,5.529,1.119a25.449,25.449,0,0,0,6.02.83,34.222,34.222,0,0,0,5.183-.476.582.582,0,0,0,.5-.57V6.283A.588.588,0,0,0,29.177,5.713Z" transform="translate(-6.75 -4.5)" />
        </svg>
        <svg v-if="icon==='global'" xmlns="http://www.w3.org/2000/svg" width="29.526" height="29.526" viewBox="0 0 29.526 29.526">
            <path id="Icon_awesome-globe-americas" data-name="Icon awesome-globe-americas" d="M14.763.562A14.763,14.763,0,1,0,29.526,15.326,14.763,14.763,0,0,0,14.763.562Zm4.9,21.288c-.232.231-.476.473-.673.671a1.423,1.423,0,0,0-.367.638c-.09.337-.163.677-.284,1L17.3,26.952a11.9,11.9,0,0,1-2.539.279V25.6a4.457,4.457,0,0,0-1.347-3.051,1.9,1.9,0,0,1-.558-1.347V19.3a1.9,1.9,0,0,0-.98-1.665c-.855-.473-2.072-1.135-2.906-1.554a8.581,8.581,0,0,1-1.884-1.295l-.048-.043a6.833,6.833,0,0,1-1.075-1.235c-.558-.82-1.468-2.168-2.059-3.044A11.971,11.971,0,0,1,10.05,4.4l1.429.715a.952.952,0,0,0,1.379-.852V3.587a11.9,11.9,0,0,1,1.452-.144l1.685,1.685a.952.952,0,0,1,0,1.347l-.279.279-.616.616a.476.476,0,0,0,0,.673l.279.279a.476.476,0,0,1,0,.673l-.476.476a.477.477,0,0,1-.337.139h-.535a.476.476,0,0,0-.332.135l-.591.574a.477.477,0,0,0-.094.554l.928,1.857a.476.476,0,0,1-.426.689h-.336a.476.476,0,0,1-.312-.117l-.552-.48a.953.953,0,0,0-.926-.185l-1.856.619a.712.712,0,0,0-.093,1.311l.66.33a4.031,4.031,0,0,0,1.8.426c.626,0,1.345,1.625,1.9,1.9h3.974a1.906,1.906,0,0,1,1.347.558l.815.815a1.816,1.816,0,0,1,.532,1.284,2.77,2.77,0,0,1-.817,1.963Zm5.162-5.438a1.429,1.429,0,0,1-.842-.594l-1.07-1.605a1.427,1.427,0,0,1,0-1.585l1.166-1.749a1.427,1.427,0,0,1,.55-.485l.773-.386a11.533,11.533,0,0,1,1.161,6.838Z" transform="translate(0 -0.563)" />
        </svg>
        <svg v-if="icon==='info'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.028 43.028">
            <g id="Icon_feather-info" data-name="Icon feather-info" transform="translate(1.5 1.5)">
                <path class="ignore" id="Pfad_45" data-name="Pfad 45" d="M43.028,23.014A20.014,20.014,0,1,1,23.014,3,20.014,20.014,0,0,1,43.028,23.014Z" transform="translate(-3 -3)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                <path id="Pfad_46" data-name="Pfad 46" d="M18,26.006V18" transform="translate(2.014 2.015)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                <path id="Pfad_47" data-name="Pfad 47" d="M18,12h0" transform="translate(2.014 0.009)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            </g>
        </svg>
        <svg v-if="icon==='per person'" xmlns="http://www.w3.org/2000/svg" width="16.024" height="33.75" viewBox="0 0 16.024 33.75">
            <g id="Icon_ionic-ios-man" data-name="Icon ionic-ios-man" transform="translate(-9.984 -1.125)">
                <path id="Pfad_1" data-name="Pfad 1" d="M17.979,7.5h-.014a3.185,3.185,0,1,1,3.2-3.185A3.193,3.193,0,0,1,17.979,7.5Z"/>
                <path id="Pfad_2" data-name="Pfad 2" d="M15.553,34.875a1.921,1.921,0,0,1-1.9-2.138l.07-19.519h-.7V20.6a1.706,1.706,0,0,1-.45,1.287,1.494,1.494,0,0,1-2.138,0,1.694,1.694,0,0,1-.45-1.287v-8.55a4.061,4.061,0,0,1,.97-2.7A3.591,3.591,0,0,1,13.7,8.086h8.6a3.574,3.574,0,0,1,2.742,1.273,4.043,4.043,0,0,1,.97,2.693V20.6a1.667,1.667,0,0,1-.464,1.287,1.58,1.58,0,0,1-2.18,0A1.667,1.667,0,0,1,22.9,20.6V13.219h-.633V32.737a1.948,1.948,0,1,1-3.881.042V22.852h-.844v9.907A2,2,0,0,1,15.553,34.875Z"/>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'flagIcon',
    props: {
        activated: Boolean,
        icon: String
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';

.inactive svg path:not(.ignore) {
    fill: $secondary;
}
.activated svg path {
    fill: $primary;
}

.icon {
      width: 25px;
      height: 25px;
      margin: 5px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    & svg {
        height: 100%;
        width: 100%; 
    }
  }
</style>