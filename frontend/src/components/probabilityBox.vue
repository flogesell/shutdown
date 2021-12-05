<template>
    <div @mouseenter="displayPerc" @mouseleave="displayDeg">
        <svg viewBox="0 0 35 35" id="circle" width="140px" height="140px">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" stroke-width="2" />
        </svg>
        <svg viewBox="0 0 35 35" id="arc" width="140px" height="140px">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#aaa" stroke-width="2" :style="{ 'stroke-dasharray': percentage + ', 100' }" />
        </svg>
        <p class="probability" id="number">{{ deg }}</p>
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
           let nbr = document.getElementById('number');
           let prc = this.$props.percentage;
           nbr.innerHTML = prc + "%";
        },
        displayDeg() {
           let nbr = document.getElementById('number');
           let deg = this.$props.deg;
           nbr.innerHTML = deg;
        }
    }
}
</script>

<style scoped lang="scss">
    #arc {
        margin-left: -140px;
    }
    .probability {
        margin-top: -90px;
        font-size: 25px;
    }
    #degree {
        opacity: 1;
    }
    #percentage {
        opacity: 0;
    }
</style>
