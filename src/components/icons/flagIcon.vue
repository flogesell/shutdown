<template>
    <div :class="[ activated ? 'activated' : 'inactive' ]">
        <svg xmlns="http://www.w3.org/2000/svg" width="23.105" height="31.638" viewBox="0 0 23.105 31.638">
            <path id="Icon_ionic-ios-flag" data-name="Icon ionic-ios-flag" d="M29.177,5.713c-.224.036-.462.072-.715.1a42.549,42.549,0,0,1-4.374.375,26.56,26.56,0,0,1-5.645-.881A27.646,27.646,0,0,0,12.626,4.5c-4.057,0-5.435.873-5.58.967l-.3.209V35.1a1.03,1.03,0,0,0,.888,1.032,1.01,1.01,0,0,0,1.133-1V20.062a.587.587,0,0,1,.462-.57,17.515,17.515,0,0,1,3.393-.282c1.891,0,3.66.722,5.529,1.119a25.449,25.449,0,0,0,6.02.83,34.222,34.222,0,0,0,5.183-.476.582.582,0,0,0,.5-.57V6.283A.588.588,0,0,0,29.177,5.713Z" transform="translate(-6.75 -4.5)" />
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