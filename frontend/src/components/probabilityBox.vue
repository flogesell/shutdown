<template>
    <div class="probability-container">
        <svg viewBox="0 0 35 35">
            <path id="circle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-width="1.5" />
            <path id="arc" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-width="1.5" :style="'--from-width:'+Number(oldVal)+'px; --to-width:'+Number(percentage)+'px;'" :key="percentage"/>
        </svg>
        <div class="deg-perc-wrapper">
            <h3 class="degrees" :id="'number' + deg">{{deg+'°C'}}</h3>
            <h3 class="probability" :id="'number' + deg">{{ parseInt(percentage) + " %" }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'probabilityBox',
    data() {
        return {
            oldVal: 0
        }
    },
    props: {
        percentage: String,
        deg: String
    },
    computed: {
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
           if(deg == "FAILED") {
                nbr.innerHTML = deg;
           } else {
                nbr.innerHTML = deg + "°C";
           }
        }
    },
    watch: {
        percentage(val, oldVal) {
            if(oldVal === undefined) this.oldVal = 0;
            else this.oldVal = Number(oldVal);
        },
  },
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
        user-select: none;
    }
    #circle {
        //stroke: $secondary;
        fill: $color;
    }
    #arc {
        stroke: $primary;
        position: absolute;
        //stroke-linecap: round;
        animation: draw 0.5s ease-in-out forwards;
    }
    .deg-perc-wrapper {
        display: flex;
        flex-direction: column;
        position: absolute;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .degrees {
        margin: 8px 0px 0px 0px;
        font-weight: bold;
        font-size: 1.6rem;
    }
    .probability {
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        width: 100%;
    }
    @keyframes draw {
        from  {
            stroke-dasharray: var(--from-width), 100px;
        }
        to {
            stroke-dasharray: var(--to-width), 100px;
        }
    }
    #degree {
        opacity: 1;
        color: $black;
    }
    #percentage {
        opacity: 0;
    }

    //----- Media Screen small desktop -----//@at-root
    @media screen and (max-height: 720px) {
        .degrees {
            font-size: 1.0em;
        }
        .probability {
            font-size: .7em;
        }
    }
</style>
