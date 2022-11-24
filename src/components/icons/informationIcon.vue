<template>
    <div :class="[ activated ? 'activated' : 'inactive' ]" >
        <svg xmlns="http://www.w3.org/2000/svg" :width="[ small ? '25' : '43.028']" :height="[ small ? '25' : '43.028']" viewBox="0 0 43.028 43.028">
            <g id="Icon_feather-info" data-name="Icon feather-info" transform="translate(1.5 1.5)">
                <path id="Pfad_45" data-name="Pfad 45" d="M43.028,23.014A20.014,20.014,0,1,1,23.014,3,20.014,20.014,0,0,1,43.028,23.014Z" transform="translate(-3 -3)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                <path id="Pfad_46" data-name="Pfad 46" d="M18,26.006V18" transform="translate(2.014 2.015)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                <path id="Pfad_47" data-name="Pfad 47" d="M18,12h0" transform="translate(2.014 0.009)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'flagIcon',
    props: {
        activated: Boolean,
        small: Boolean,
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';

.inactive>svg>path {
    fill: $secondary;
}
.activated>svg>path {
    fill: $primary;
}
</style>