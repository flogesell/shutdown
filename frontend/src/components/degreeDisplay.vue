<template>
    <div>
      <div class="circle">
          <div v-if="animated">
           <li  v-for="(paragraph, index) in data[state].text" :key="index" class="flex_centered">
      <p><vue-typer :text="paragraph" :type-delay='50' :erase-on-complete='false' :repeat='0'/></p>
    </li>
         </div>
      </div>
    </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
    components: {
        VueTyper,
    },
    props: {
        data: {
            type: Array
        },
        state: {
            type: Number
        },
        animated: {
            type: Boolean
        }
    },
    data(){
        return{
            text: 0,
        }
    }
}
</script>

<style scoped>
    .circle{
        border-radius: 50%;
        color: white;
        background-color: rgba(0,0,0,0.7);
        opacity: 0.9;
        width: 600px;
        height: 600px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p{
        width: 400px;
        text-align: center;
        opacity: 1;
    }

</style>

<style lang="scss">
  .circle{
     .custom.char.typed{ color: #FFF !important; 
     opacity: 1;}
  }
 
</style>