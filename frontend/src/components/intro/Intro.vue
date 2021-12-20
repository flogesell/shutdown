<template>
  <div v-if="visible" class="intro flex_centered">
    <div>
    <div class="logo flex_centered">
      <button id="close" @click="skip_intro()"><h2>&#x2715;</h2></button>
      <img src="@/assets/logo/logo_positive.svg" alt="Logo"/>
    </div>
    <ol ref="slider">
    <li v-for="(paragraph, index) in text" :key="index" class="flex_centered">
      <h3>{{paragraph}}</h3>
    </li>
    <Button :text="'next'" id="next"/>
    </ol>
    <div ref="indicator" class="indicator flex_centered">
    <div v-for="(paragraph, index) in text" :key="index"></div>
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
      text: ['Since 2015 the climate conference in Paris defined the goal to limit the global rise of temperature o 1.5°C compared to preindustrial levels.',
             'This temperature goal was defined by climate scientists coming to the conclusion that a rise of temperature of 2°C would cause irreversible damage to the global ecosystem.',
             'All the validated scientific research comes to the conclusion that so called "Greenhouse Gases", emitted by humankind, are the cause of the current rise in temperature.',
             'What would happen if the countries with the highest greenhouse gas emissions would shut down all emitting sectors?',
             'This application gives you an overview over the amount of emissions of these countries, helps you to understand the probabilities of reaching our climate goals and gives you insights into the consequences that we will face, if we do not reach these goals.'
            ],
      visible: true
    }
  },
  methods: {
    skip_intro(){
      this.visible = false
    },

    updateIndicator(){
      let slider = this.$refs.slider
      let active = Math.round(slider.scrollLeft / slider.clientWidth)
      let points = slider.parentElement.querySelector('.indicator').children

      if(slider.scrollLeft % slider.clientWidth){
        active = Math.round(slider.scrollLeft / slider.clientWidth)
        for(let el of points){
          el.style.background = 'none'
        }
      }
      points[active].style.background = '#A3A3A3'
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
    padding: 1.2em;
    align-items: stretch !important;

    >div{
      width: 100%;
      border-radius: 1.2em;
      display: flex;
      flex-flow: column nowrap;
      background: rgba($color: $background, $alpha: .8);
      backdrop-filter: blur(24px);
      box-shadow: 4px 4px 12px rgba($color: $secondary, $alpha: 1.0);
    }

    ol{
      list-style: none;
      width: 100%;
      flex: 1;

      display: flex;
      flex-flow: row nowrap;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;

      &::-webkit-scrollbar{
        display: none;
      }

      li{
        scroll-snap-align: center;
        min-width: 100%;
        height: 100%;
        padding: 1.2em;

        h3{
          line-height: 140%;
          transform: translateY(-12px);
          max-width: 460px;
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
          color: $primary;
        }
      }

      img{
        height: 2.4em;
        max-width: 50%;
      }
    }

    .indicator{
            
      div{
        transition: background .5s;
        width: 12px;
        height: 12px;
        margin: 1.2em 6px;
        border-radius: 50%;
        border: 2px rgba($color: $secondary, $alpha: 1.0) solid;
      }
    }

    #next{
        position: absolute;
        bottom: 1.2em;
        right: 1.2em;
    }
  }

</style>