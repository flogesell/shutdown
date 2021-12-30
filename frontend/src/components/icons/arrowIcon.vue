<template>
    <div :class="[ activated ? 'activated' : 'inactive' ]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="17.5" viewBox="0 0 23.125 23.125">
            <path id="Icon_awesome-undo-alt" data-name="Icon awesome-undo-alt" d="M12.1.562a11.523,11.523,0,0,0-7.966,3.2L2.473,2.1a1.119,1.119,0,0,0-1.91.791v6.25A1.119,1.119,0,0,0,1.681,10.26h6.25a1.119,1.119,0,0,0,.791-1.91L6.776,6.4A7.832,7.832,0,1,1,6.967,18.02a.559.559,0,0,0-.763.026L4.355,19.9a.561.561,0,0,0,.022.813A11.563,11.563,0,1,0,12.1.562Z" transform="translate(-0.563 -0.562)" fill="#575756"/>
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
    fill: $primary;
}
.activated>svg>path {
    fill: $secondary;
}
</style>