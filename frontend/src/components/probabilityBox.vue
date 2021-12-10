<template>
    <div @mouseenter="displayPerc" @mouseleave="displayDeg" class="probability-container">
        <svg viewBox="0 0 35 35" id="circle" width="140px" height="140px">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" stroke-width="1.5" />
        </svg>
        <svg viewBox="0 0 35 35" id="arc" width="140px" height="140px">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#aaa" stroke-width="1.5" :style="{ 'stroke-dasharray': percentage + ', 100' }" />
        </svg>
        <p class="probability" :id="'number' + deg">{{ deg }}°C</p>
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
           nbr.innerHTML = prc + "%";
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
    .probability-container {
        display: block;
        flex: none;
        align-items: center;
        text-align: center;
    }
    #arc {
        margin-left: -140px;
    }
    .probability {
        font-size: 25px;
        position: absolute;
        text-align: center;
    }
    #degree {
        opacity: 1;
    }
    #percentage {
        opacity: 0;
    }
</style>
