<template>
  <div :title="name" class="ball" :class="(zoomIn && !legend) ? 'no-zoom' : ''" @click="(iso.length>0 && tab !== 'Per Sector') ? startZoom(index) : toggleSectorInfobox(name)" :style="{'left': x + 'px', 'top': y + 'px', 'height': diameter(), 'width': diameter(), 'background-color': color, 'color':getFontColor()}">
      <p class="iso" v-if="((!legend) && (iso !== 'no iso') && (iso.length > 0)) && !( activeCountry === name)" :style="{'font-size' : this.font_size}">{{ iso }}</p>
      <p class="name" v-if="((!legend) && ((iso === 'no iso') || (iso.length === 0)))" :style="{'font-size' : this.font_size}">{{ (this.short_text) ? (name.substring(0, 3) + '.') : (name) }}</p>
      <div class="only-for-big-circles" v-if="(emissions) > 1000 || iso.length === 0 || zoomed" >
        <p class="amount" v-if="!legend && ( activeCountry !== name)" :style="{'font-size' : this.font_size}" >{{ (tab==='Per Person')?((emissions/1000).toFixed(2) + ' t'): (emissions / 1000).toFixed(2) + ' Gt' }} </p>
        <div v-if="(legend || (activeCountry === name) )&& iso.length !== 0" class="legend" :style="{'border-color': color, 'width' : (!legend) ? this.legend_width : 'test', 'min-width' : (!legend) ? '0px' : '400px','border-width' : (!legend && emissions < 3000) ? '1px' : '2px' }">
            <div class="test" :style="{'color': color, 'font-size' : (!legend) ? this.legend_fontSize : ''}"> {{ ((emissions / 1000).toFixed(2) + ' Gt CO₂') }}</div>
        </div>
        
      </div>
      <Icon v-if="!legend && zoomIn" icon="hover2" :activated="true"/>
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
        zoom_factor: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            hover: false,
            styleObject: {
                left: this.x,
                top:  this.y,
            },
            fontcolor: this.getFontColor() 
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
        },
        toggleSectorInfobox(name) {
            this.$store.commit('CHANGE_INFOBOX_HEADLINE', name)
            if(this.$store.state.app.infoboxOpen == false) {
                this.$store.commit('TOGGLE_INFOBOX')
            } else {
                this.$store.commit('OPEN_INFOBOX')
            }
        }
    },
    computed: {
        font_size: function() {
            return (1.2 * 0.1 * Math.sqrt(Math.sqrt(this.size / this.zoom_factor))) + "em";
        },
        show_emissions: function() {
            return ((1.2 * 0.1 * Math.sqrt(Math.sqrt(this.size * this.zoom_factor))) > 0.8)
        },
        legend_fontSize() {
            return (1.2 * 0.05 * Math.sqrt(Math.sqrt(this.size / this.zoom_factor))) + "em";
        },
        legend_width() {
            return 2 * Math.sqrt(this.size / Math.PI) + 'px'
        },
        zoomed() {
            return this.$store.state.app.activeSpecific.length > 0 && this.$store.state.app.activeSpecific === this.name && this.iso.length > 0;
        },
        zoomIn() {
            return this.$store.state.app.activeSpecific.length === 0;
        },
        tab() {
            return this.$store.state.app.activeTab;
        },
        activeCountry() {
            return this.$store.state.app.activeSpecific;
        },
        short_text: function() {
            //console.log((parseInt(this.diameter().substring(0, this.diameter().length - 3)) < 70) && this.name.length > 7)
            return ((parseInt(this.diameter().substring(0, this.diameter().length - 3)) < 60) && (this.name.length > 7));
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
        font-weight: bold;

        &.no-zoom:hover {
            background-color: #535353 !important;
            border: 2px solid black;
            cursor: pointer;
        }
        
        .icon {
            width: 100%;
            margin-top: -4px;
            height: 25px;
        }

        p {
            display: flex;
            justify-content: center;
            align-items: center;
            user-select: none;
        }

        .amount {
            font-weight: 400;
            text-align: center;
        }

        .legend {
            position: absolute;
            top: 0px;
            width: 20vw;
            //min-width: 400px;
            height: 1px;
            left: 50%;
            border-bottom: 2px solid;
            font-size: 1.6rem;

        &.zoomed {
            min-width: 0px;
            border-bottom: 1px solid;
        }

            .test {
                text-align: right;
                font-weight: 500;
                height: 25px;
                display: flex;
                flex-direction: column-reverse;
                margin-top: -25px;
            }
        }
    }
    
</style>
    