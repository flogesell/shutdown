<template>
    <div>
      <div class="circle">
          <div v-if="animated">
            <p id="text">{{data[state].text}}</p>
         </div>
      </div>
    </div>
</template>

<script>

export default {
    components: {

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
    },
    methods: {
        appear(){
            document.getElementById("text").style.opacity="1";
        }
    },
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
        transition: opacity 1s;
        opacity: 0;
    }

</style>

<style lang="scss">
  .circle{
     .custom.char.typed{ color: #FFF !important; 
     opacity: 1;}
  }
 
</style>