<template>
    <div>
        <div class="ring" v-for="ring in rings" :key="ring.x" :style="{'left': ring.x + 'px', 'top': ring.y + 'px', 'height': ring.diameter + 'px', 'width': ring.diameter + 'px', 'stroke': color}"></div>
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
                    diameter: diameter
                }
                tmp_rings.push(tmp)
            }
            return tmp_rings;
        }
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
        border-width: 1px;
        opacity: 0.5;
        
    }
    
</style>