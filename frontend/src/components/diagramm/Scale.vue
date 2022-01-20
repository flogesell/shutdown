<template>
    <div>
        <div class="ring" v-for="(ring, index) in rings" :key="ring.x" :style="{'left': ring.x + 'px', 'top': ring.y + 'px', 'height': ring.diameter + 'px', 'width': ring.diameter + 'px', 'border-color': current_color, 'display': (!(index % 2)) ? '' : 'none'}">
            <div v-if="!(index % 2)" class="legend" :style="{'border-color': current_color}">
                <div class="test" :style="{'color': current_color}">{{ (ring.co2 + ' Gt CO2') }} </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Scale",
    props: {
        x: {
            type: Number,
            default: 0
        },
        y: {
            type: Number,
            default: 0
        },
        increment: {
            type: Number,
            default: 1000
        },
        scale: {
            type: Number,
            default: 1
        },
        nb_of_rings: {
            type: Number,
            default: 1
        },
        color: {
            type: String,
            default: "black"
        }
    },

    computed: {
        rings: function() {
            let tmp_rings = [];
            for(let i = 0; i < this.nb_of_rings; i++) {
                let diameter = 2 * Math.sqrt((i + 1) * this.increment * this.scale / Math.PI);
                let tmp = {
                    x: this.x - diameter/2,
                    y: this.y - diameter/2,
                    diameter: diameter,
                    co2: ((i+1) * this.increment / 1000)
                }
                tmp_rings.push(tmp)
            }
            return tmp_rings;
        },
        current_color: function () {
            if(this.$store.state.app.activeSpecific == ''){
                return this.color;
            }
            else {
                return 'transparent';
            }
        },
        tab() {
            return this.$store.state.app.activeTab;
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_config.scss';
    .ring {
        position: absolute;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        border-radius: 50%;
        border-style: solid;
        border-width: 2px;
        opacity: 0.5;
    }

    .legend {
        position: absolute;
        bottom: -2px;
        width: 20vw;
        min-width: 400px;
        height: 1px;
        left: 50%;
        border-bottom: 2px solid;
        .test {
            text-align: right;
            font-weight: 500;
            height: 25px;
            display: flex;
            flex-direction: column-reverse;
            margin-top: -25px;
            font-size: 1.2rem;
        }
    }
    
</style>