<template>
    <div :class="[ activated ? 'activated' : 'inactive' ]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16.024" height="33.75" viewBox="0 0 16.024 33.75">
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
    },
    methods: {
        whenActivated() {

        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';

.inactive>svg>g>path {
    fill: $secondary;
}
.activated>svg>g>path {
    fill: $primary;
}
</style>