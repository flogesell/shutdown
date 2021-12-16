<template>
    <div @mouseenter="displayPerc" @mouseleave="displayDeg" class="probability-container">
        <svg viewBox="0 0 35 35"  width="140px" height="140px">
            <path id="circle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-width="1.5" />
            <path id="arc" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-width="1.5" :style="{ 'stroke-dasharray': percentage + ', 100' }" />
        </svg>
            
        <h3 class="probability" :id="'number' + deg">{{ deg }}°C</h3>
    </div>
</template>

<script>
export default {
    name: 'probabilityBox',
    props: {
        percentage: String,
        deg: String
    },
    methods: {
        displayPerc() {
           let nbr = document.getElementById('number' + this.deg);
           let prc = this.$props.percentage;
           nbr.innerHTML = prc + "%<br>likely";
        },
        displayDeg() {
           let nbr = document.getElementById('number' + this.deg);
           let deg = this.$props.deg;
           nbr.innerHTML = deg + "°C";
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';

    .probability-container {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
    }
    #circle {
        stroke: $secondary;
    }
    #arc {
        stroke: $primary;
        position: absolute;
    }
    .probability {
        transform: translate(2px, 2px);
        font-style: italic;
        position: absolute;
        margin: 0 auto;
        width: 145px;
    }
    #degree {
        opacity: 1;
    }
    #percentage {
        opacity: 0;
    }
</style>
