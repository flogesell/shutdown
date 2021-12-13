<template>
  <div class="ball" @click="startZoom(index)" :style="{'left': x + 'px', 'top': y + 'px', 'height': diameter(), 'width': diameter(), 'background-color': color, 'color':getFontColor()}">
      <p class="name" >{{ name }}</p>
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
    },
    methods: {
        diameter() {
            let diameter = 2 * Math.sqrt(this.size / Math.PI);
            return diameter + "px";
        },
        update() {

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
    .ball{
        position: absolute;
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: black;
        border-radius: 50%;
        transition: background-color 1s;
        
        p {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    
</style>

//constructor(x, y, name, total_emissions, emissions_by_category, scale)
    