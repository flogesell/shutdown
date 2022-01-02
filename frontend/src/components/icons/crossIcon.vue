<template>
    <div :class="[ activated ? 'activated' : 'inactive' ]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47">
            <path id="Icon_ionic-ios-close-circle" data-name="Icon ionic-ios-close-circle" d="M26.875,3.375a23.5,23.5,0,1,0,23.5,23.5A23.5,23.5,0,0,0,26.875,3.375Zm5.954,32.007-5.954-5.954-5.954,5.954a1.806,1.806,0,1,1-2.553-2.553l5.954-5.954-5.954-5.954a1.806,1.806,0,0,1,2.553-2.553l5.954,5.954,5.954-5.954a1.806,1.806,0,0,1,2.553,2.553l-5.954,5.954,5.954,5.954a1.814,1.814,0,0,1,0,2.553A1.794,1.794,0,0,1,32.829,35.382Z" transform="translate(-3.375 -3.375)"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'flagIcon',
    props: {
        activated: Boolean,
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