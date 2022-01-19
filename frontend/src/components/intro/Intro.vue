<template>
  <div v-if="visible" class="intro flex_centered">
    <div>
    <div class="logo flex_centered">
      <button id="close" @click="skip_intro()"><h2>&#x2715;</h2></button>
    </div>
    <ol ref="slider" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/' + getRandomImage() +'.png')}">
    <li v-for="(paragraph, index) in text" :key="index" class="flex_centered">
      <div class="circle flex_centered"/>
      <transition name="fade">
          <h3 v-if="index == active">{{ paragraph }}</h3>
      </transition>
    </li>
    <div @click="updateSlide()">
      <Button :text="button" id="next"/>
    </div>
    </ol>
    <div ref="indicator" class="indicator flex_centered">
    <div id="indicator">
      <div class="dot" v-for="(paragraph, index) in text" :key="index" :style=" index === active ? 'opacity: 1' : ''" @click="updateSlide(index)"></div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import Button from '../buttons/Button.vue'

export default {
  name: 'Intro',
  components: { Button },
  data: () => {
    return {
      text: ['Since 2015 the climate conference in Paris defined the goal to limit the global rise of temperature of 1.5°C compared to preindustrial levels.',
             'This temperature goal was defined by climate scientists coming to the conclusion that a rise of temperature of 2°C would cause irreversible damage to the global ecosystem.',
             'All the validated scientific research comes to the conclusion that so called "Greenhouse Gases", emitted by humankind, are the cause of the current rise in temperature.',
             'Would we reach the 1.5°C goal if the largest emitters stopped their greenhouse gas emissions immediately?',
             'This application gives you an overview over the amount of emissions of these countries, helps you to understand the probabilities of reaching our climate goals and gives you insights into the consequences that we will face, if we do not reach these goals.'
            ],
      button: 'next',
      active: 0,
      visible: true
    }
  },
  methods: {
    skip_intro(){
      this.$store.commit('CHANGE_INTRO')
      this.visible = false;
    },

    updateIndicator(){
      let slider = this.$refs.slider
      let active = Math.round(slider.scrollLeft / slider.clientWidth)

      if(this.active != active){
        this.active = active
      }

      this.updateButtonText()
    },

    updateButtonText(){
      let sliderLength = this.$refs.slider.parentElement.querySelectorAll('.dot').length
      let active = this.active

      if(active < sliderLength - 1){
        this.button = 'next'
      } else {
        this.button = 'start app'
      }
    },
    updateSlide(num){
      let slider = this.$refs.slider
      let active = Math.round(slider.scrollLeft / slider.clientWidth)
      let points = slider.parentElement.querySelectorAll('.dot')
      //set active slide to param
      if(!num && num!=0){
        num = active+1;
      }
      active = num;
      //scroll to active slide
      if(active < points.length){
        slider.scrollLeft = slider.clientWidth * active
      } 
      else{
        this.visible = false;
        this.$store.commit('CHANGE_INTRO')
      }
    },
    getRandomImage(){
      var index = Math.round(Math.random() * 2 + 1) + '_' + Math.round(Math.random() + 1)
      console.log(index)
      return index
    }
  },
  mounted(){
    // set active point on mounting the Intro component
    this.updateIndicator()

    // update active point on scroll
    this.$refs.slider.addEventListener('scroll', () =>{
      this.updateIndicator()
    })
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_config.scss';

  .intro{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    align-items: stretch !important;

    >div{
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      background: rgba($color: $background, $alpha: .8);
      backdrop-filter: blur(24px);
      box-shadow: 4px 4px 12px rgba($color: $secondary, $alpha: 1.0);
    }

    ol{
      list-style: none;
      flex: 1;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      height: 100%;

      display: flex;
      flex-flow: row nowrap;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;
      scroll-behavior: smooth;

      &::-webkit-scrollbar{
        display: none;
      }

      li{
        scroll-snap-align: center;
        min-width: 100%;
        height: 100%;
        padding: 1.2em;

        .circle{
          position: fixed;
          width: 600px;
          height: 600px;
          opacity: .96;
          background: $primary;
          box-shadow: 6px 6px 12px rgba($color: #000000, $alpha: .4);
          text-align: center;
          border-radius: 50%;
        }

        h3{
          position: relative;
          color: white;
          max-width: 600px;
          padding: 1.2em;
          text-align: center;
        }
      }
    }

    .logo{
      position: relative;
      padding: 1.2em;

      #close{
        transition: .5s;
        padding: 1.2em;
        cursor: pointer;
        height: 2.4em;
        position: absolute;
        top: 0;
        left: 0;
        border: none;
        background: none;
        color: $secondary;;

        &:hover{
          transform: scale(1.2);
          top: -0.2%;
          color: $primary;
        }
      }

      img{
        height: 2.4em;
        max-width: 50%;
      }
    }

    .indicator{   
      margin-bottom: 2.4em;     

    .dot{
        pointer-events: auto;
        cursor: pointer;
        transition: .5s;
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 0 6px;
        opacity: .4;
        background: $secondary;

        &:hover{
          opacity: 1;
          transform: scale(1.2);
        }
      }
    }

    #next{
        position: absolute;
        bottom: 1.2em;
        right: 1.2em;
        max-width: 120px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 3s .2s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>