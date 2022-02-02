<template>
  <div v-if="visible == true " class="intro flex_centered">
    <div>
    <div id="close-btn" @click="skip_intro()">
      <CloseButton class="icon" />
    </div>
    <ol ref="slider">

    <transition name="fade">
    <img v-if="active==0" src="../../assets/imgs/intro1.png" alt="" class="first">
    </transition>
    <transition name="fade">
    <img v-if="active==1" src="../../assets/imgs/3_1.png" alt="" class="second">
    </transition>
      <transition name="fade">
    <img v-if="active==1" src="../../assets/imgs/3_2.png" alt="" class="second2">
    </transition>
     <transition name="fade">
    <img v-if="active==2" src="../../assets/imgs/intro2.png" alt="" class="third">
    </transition>
    <transition name="fade">
    <img v-if="active==3" src="../../assets/imgs/intro4_1.png" alt="" class="fourth">
    </transition>
      <transition name="fade">
    <img v-if="active==3" src="../../assets/imgs/intro4_2.png" alt="" class="fourth2">
    </transition>
     <transition name="fade">
    <img v-if="active==3" src="../../assets/imgs/intro4_3.png" alt="" class="fourth3">
    </transition>
    

    <li v-for="(paragraph, index) in text" :key="index" class="flex_centered">
      <div class="circle flex_centered"/>
      <div class="audio" v-if="index === active">
      <!-- <iframe src="https://olafwempe.com/mp3/silence/silence.mp3" type=”audio/mp3″ allow=”autoplay” id=”audio” style=”display:none”></iframe> -->
      <audio autoplay id="audio_intro">
        <source :src='"../../assets/audio/intro/" + active + ".mp3"' type="audio/mp3">
      </audio>
      </div>
      <transition name="fade">
          <h3 class="flex_centered" v-if="index == active">{{ paragraph }}</h3>
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
import CloseButton from '@/components/icons/crossIcon.vue'
export default {
  name: 'Intro',
  components: { 
    Button,
    CloseButton 
  },
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
      visible: true,
      bgImage: "1_1",
      audio: false,
    }
  },
  methods: {
    skip_intro(){
      this.$store.commit('CHANGE_INTRO')
      this.visible = false;
      this.$cookies.set('visible', this.visible, '7d')
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
        this.$cookies.set('visible', this.visible, '7d')
      }
    },
    updateSlide(num){
      this.imgnmb = num
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
      return index
    }
  },
  mounted(){
    this.bgImage = this.getRandomImage()

    if(this.$cookies.isKey('visible')){
      let visibility = this.$cookies.get('visible')
      this.visible = visibility
    }
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



  img{
    opacity: 0.7;
    z-index: 0;
    transition: opacity 1s ease-in;
  }

   .first{
    width: 100%;
    position: absolute;
    left: 0px;
   top: 55%;
   transform: translate(0,-50%);
  }

  .second{
    height: 50vh;
    min-height: 370px;
    max-height: 750px;
    position: absolute;
    left: -80px;
    top: 200px;
  }

  .second2{
    height: 35vh;
    min-height: 270px;
    position: absolute;
    right: 0px;
    bottom: 100px;
  }

  .third{
    width: 100%;
    position: absolute;
    bottom: 84px;
  }

  .third2{
    height: 35vh;
    min-height: 270px;
    position: absolute;
    right: 0px;
    bottom: 100px;
  }

  .fourth{
     width: 35vw;
   
    position: absolute;
    left: 100px;
    bottom: 100px;
  }

  .fourth2{
     width: 20vw;
   
    position: absolute;
    right: 40%;
    top: 100px;
  }
  .fourth3{
    width: 35vw;
   
    position: absolute;
    right: 100px;
    bottom: 200px;
  }

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
      background: rgba($color: $background, $alpha: 1);
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
          opacity: .94;
          background: $primary;
          box-shadow: 6px 6px 12px rgba($color: #000000, $alpha: .4);
          text-align: center;
          border-radius: 50%;
        }

        .audio{
          position: absolute;
          z-index: 2;
        }

        h3{
          height: 100%;
          position: relative;
          color: white;
          max-width: 600px;
          padding: 1.2em;
          text-align: center;
        }
      }
    }

    #close-btn {
      position: absolute;
      text-align: right;
      display: flex;
      align-items: center;
      width: 35px;
      height: 35px;
      right: 60px;
      top: 30px;
      transition: all 0.5s;

      & .icon {
        transition: all 0.5s;
      }

      &:hover .icon {
        scale: 1.2;
          cursor: pointer;
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