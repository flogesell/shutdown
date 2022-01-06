<template>
  <div class="ball" @click="startZoom(index)" :style="{'left': x + 'px', 'top': y + 'px', 'height': diameter(), 'width': diameter(), 'background-color': color, 'color':getFontColor()}">
      <p class="name" >{{ name }}</p><br>
      <p class="amount" v-if="!legend" >{{ (emissions / 1000).toFixed(2)  }} Gt</p>
    <div v-if="legend" class="legend" :style="{'border-color': color}">
        <div class="test" :style="{'color': color}"> {{ (emissions / 1000).toFixed(2)  }} Gt CO2</div>
    </div>
  </div>
</template>

<script>
export default {
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
        
        p {
            display: flex;
            justify-content: center;
            align-items: center;
            user-select: none;
        }

        .amount {
            font-weight: 200;
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
    