<template>
    <div :class="[ activated ? 'activated' : 'inactive' ]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="25.414" height="27.981" viewBox="0 0 25.414 27.981">
            <path id="Vereinigungsmenge_8" data-name="Vereinigungsmenge 8" d="M-3978.929,1414.152c-3.583-3.216-8.52-3.786-11.687-3.767v8.216l-9.384-10.8,9.384-10.8v8.346c4.809.295,13.616,1.64,14.862,7.5,1.727,8.122-11.146,11.135-11.146,11.135S-3973.235,1419.263-3978.929,1414.152Z" transform="translate(4000.5 -1396.5)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
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