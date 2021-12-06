<template>
  <div class="ball" :style="{'left': x + 'px', 'top': y + 'px', 'height': diameter(), 'width': diameter()}">
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
        }
    },
    methods: {
        diameter() {
            console.log(this.size);
            let diameter = 2 * Math.sqrt(this.size / Math.PI);
            return diameter + "px";
        },
        update() {

        }
    },
    data(){
        return {
            styleObject: {
                left: this.x,
                top:  this.y,
            }
        }
    }
}
</script>

<style scoped>
    .ball{
        position: absolute;
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: black;
        border-radius: 50%;
        color: white;
    }
    
</style>

//constructor(x, y, name, total_emissions, emissions_by_category, scale)
    