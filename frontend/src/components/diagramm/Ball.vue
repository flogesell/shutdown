<template>
  <div class="ball" :class="(zoomIn && tab === 'Per Country') ? 'no-zoom' : ''" @click="startZoom(index)" :style="{'left': x + 'px', 'top': y + 'px', 'height': diameter(), 'width': diameter(), 'background-color': color, 'color':getFontColor()}">
      <p class="iso" v-if="(!legend) && (iso !== 'no iso') && (iso.length > 0)">{{ iso }}</p>
      <p class="name" v-if="(!legend) && ((iso === 'no iso')|| (iso.length === 0) )">{{ name }}</p>
      <div class="only-for-big-circles" v-if="(emissions) > 1000 || zoomed" >
        <p class="amount" v-if="!legend" >{{ (tab==='Per person')?((emissions/1000).toFixed(2) + ' t'):((emissions>1000) ? (emissions / 1000).toFixed(2) + ' Gt' : (emissions).toFixed(2) + ' Mt') }} </p>
        <div v-if="legend" class="legend" :style="{'border-color': color}">
            <div class="test" :style="{'color': color}"> {{ (tab==='Per person')?((emissions/1000).toFixed(2) + ' t'):((emissions>1000) ? (emissions / 1000).toFixed(2) + ' Gt' : (emissions).toFixed(2) + ' Mt') }}</div>
        </div>
        <Icon v-if="!legend && emissions > 3000 && zoomIn && tab === 'Per Country'" icon="hover" :activated="true"/>
      </div>
  </div>
</template>

<script>
import Icon from '@/components/icons/icon.vue'

export default {
    components: {
        Icon,
    },
    props: {
        x: {
            type: Number,
            default: 0
        },
        y: {
            type: Number,
            default: 0
        },
        name: {
            type: String,
            default: "not named"
        },
        iso: {
            type: String,
            default: "no iso"
        },
        size: {
            type: Number,
            default: 0
        },
        index:{
            type: Number,
        },
        color:{
            type:String,
            default: "black",
        },
        emissions: {
            type: Number,
            default: 0
        },
        legend: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            hover: false
        }
    },
    methods: {
        diameter() {
            let diameter = 2 * Math.sqrt(this.size / Math.PI);
            return diameter + "px";
        },
        startZoom(key) {
            if(this.color != "transparent"){
                this.$emit('clicked', key);
            } 
        },
        getFontColor(){
            if (this.color!="transparent"){
                return "white";
            }
            else{
                return "transparent";
            }
        }
    },
    computed: {
        zoomed() {
            return this.$store.state.app.activeSpecific.length > 0 && this.$store.state.app.activeSpecific === this.name;
        },
        zoomIn() {
            return this.$store.state.app.activeSpecific.length === 0;
        },
        tab() {
            return this.$store.state.app.activeTab;
        },
    },
    data(){
        return {
            styleObject: {
                left: this.x,
                top:  this.y,
            },
            fontcolor: this.getFontColor() 
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_config.scss';
    .ball {
        font-family: Roboto;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        background-color: $primary;
        opacity: 0.7;
        border-radius: 50%;
        transition: background-color 1s;
        user-select: none;

        &.no-zoom:hover {
            background-color: #535353 !important;
            border: 2px solid black;
        }
        
        .icon {
            width: 100%;
            position: absolute;
        }
        p {
            display: flex;
            justify-content: center;
            align-items: center;
            user-select: none;
        }

        .amount {
            font-weight: 200;
            text-align: center;
        }

        .legend {
            position: absolute;
            top: 0px;
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
            font-size: 1.4em;
        }
    }
    }
    
</style>
    