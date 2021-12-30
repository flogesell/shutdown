<template>
    <transition name="slideIn">
    <div class="infobox" v-if="open">
        <div id="close-btn" v-on:click="$emit('toggleInfobox')">
            <CloseButton />
        </div>
        <h1>{{ headline }}</h1>
        <p>{{ content }}</p>
    </div>
    </transition>
</template>

<script>
import CloseButton from '@/components/icons/crossIcon.vue'

export default {
    name: 'Infobox',
    props: {
        open: Boolean,
        headline: String,
        content: String,
    },
    components: {
        CloseButton,
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';

.infobox {
    position: absolute;
    width: 25%;
    height: 120vh;
    right: 0;
    top: -10vh;
    padding: calc(10vh + 50px) 50px;

    background: #F2F2F2;
    border-left: 5px solid #FFDC7C;
    filter: drop-shadow(-2px 0 10px #000);
}

.slideIn {
    &-enter, &-leave-to {
        //opacity: 0;
        transform: translateX(100%);
    }
    &-enter-active, &-leave-active {
        transition: all .3s;
    }
}

#close-btn {
    text-align: right;
}
</style>
