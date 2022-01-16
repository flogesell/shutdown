
<template>
  <div class="effects">
    <div  class="starttext"><div>
       <p>Your</p> <Logo id="logo" :checked=false :dark=true /> <p> scenario will mostlikely cause a global warming of 1.5° celsius</p> 
      
       </div>
        <li v-for="(paragraph, index) in text" :key="index" class="flex_centered typer">
      <p><vue-typer :text="paragraph" :erase-on-complete='false' :repeat='0'/></p>
       </li>
      </div>
      
      <DegreeDisplay :data="data" :state="state" class="circle" :animated="animated" />
      <DegreeNumber :data="data" :state="state"  />
      <!---<p>{{scrollamount}}</p>-->

      <div v-if="animated" class="sidenav">
        <p v-if="state!=0" @click="state=0" class="two">1.5°</p>
        <p v-if="state!=1" @click="state=1" class="two">2°</p>
        <p v-if="state!=2" @click="state=2" class="two">3°</p>
      </div>
    <Button :text='"Try</br>again!"' id="probButton" @click="tryAgain" />
    <transition name="fade">
    <img v-if="state==0" src="../assets/imgs/1_1.png" alt="" class="first">
    </transition>
    <transition name="fade">
    <img v-if="state==0" src="../assets/imgs/1_2.png" alt="" class="first2">
    </transition>
    <transition name="fade">
    <img v-if="state==1" src="../assets/imgs/2_1.png" alt="" class="second">
    </transition>
    <transition name="fade">
    <img v-if="state==1" src="../assets/imgs/2_2.png" alt="" class="second2"> 
    </transition>
    
  
  </div>
  
</template>

<script>
import Logo from '@/components/Logo.vue'
import Button from '@/components/buttons/Button.vue'
import DegreeDisplay from '@/components/degreeDisplay.vue'
import DegreeNumber from '@/components/degreeNumber.vue'
import { VueTyper } from 'vue-typer'

export default {
  name: 'Info',
  components: {
    Button,
    Logo,
    DegreeDisplay,
    DegreeNumber,
    VueTyper
  },
  created() {
    window.addEventListener('scroll', this.scrolled);
    
   
  },
  mounted(){
    setTimeout(() => { window.addEventListener('click', this.startanimation);}, 1000);
  },
  beforeDestroy(){
    console.log("unmound")
    window.removeEventListener('click', this.startanimation);
  },
  data() {
    return {
      data: this.$store.state.results.degrees,
      scrollamount: 0,
      state: 0,
      text: ["click to see how such a world would look like",],
      animated: false,
    }
  },
  methods: {
    tryAgain() {
      this.$router.push('/')
      this.$store.commit('RESET')
    },
    scrolled(){
      this.scrollamount = window.pageYOffset;
      this.state = Math.round(window.pageYOffset/1300);
      console.log(this.state);
    },
    startanimation(){
      document.getElementsByClassName("circle")[0].style.transform="translate(-50%, -50%) scale(1)"
      document.getElementsByClassName("circle")[0].style.cursor="default"
      document.getElementsByClassName("starttext")[0].style.opacity="0"
      document.getElementsByClassName("starttext")[0].style.cursor="default"
      var elements = document.body.getElementsByTagName('img');
      setTimeout(() => {
      for (var i = 0; i < elements.length; i++) {
          elements[i].style.opacity = "0.7";
      }
      }, 700);
      console.log("clicked");
      setTimeout(() => { this.animated = true; }, 2000);
      setTimeout(() => {document.getElementsByClassName("circle2")[0].style.transform="translate(calc(-50% + 338px ), -50%) scale(1)"}, 700);
      //setTimeout(() => {document.getElementsByClassName("circle")[0].style.transform="translate(-50%, -50%) scale(1)"}, 4000);
    }
  },
}
</script>


<style lang="scss" scoped>

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
 
  img{
    opacity: 0;
    z-index: 0;
    transition: opacity 1s ease-in;
  }

  .first{
    height: 30vh;
    min-height: 270px;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }

  .first2{
    height: 60vh;
    min-height: 470px;
    position: absolute;
    right: 0px;
    top: 200px;
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
    height: 60vh;
    min-height: 270px;
    position: absolute;
    right: 0px;
    bottom: 0px;
  }

  .sidenav{
    position: fixed;
    left: 50px;
    top: 50px;
    p{
      cursor: pointer;
      margin-bottom: 10px;
      padding: 10px;
      background-color: lightgrey;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      color: white;
      font-weight: 700;
    }
  }

  .effects {
    
    
   //height: 2500px;
    .starttext {
      position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%) ;
        color: white;
        z-index: 3;
        width: 100vw;
        transition: opacity 0.5s ease-out;
        cursor: pointer;
        white-space: nowrap;
        
        div{
          display: flex;
          justify-content: center;

        }

        p{
          white-space: nowrap;
          float: left;
          font-size: 26px;
          margin: 0px
        }
    }
  }
  #logo {
    width: 170px;
    
    margin: 0 5px;
    float: left;
  } 
 
  .text {
    margin: 50px 0;
    text-align: center;
    h2 {
      margin-bottom: 25px;
    }
  }

  .typer{
    margin-top: 20px;
  span{
      font-size: 20px;
    }
  
  }

  button {
    max-width: 130px;
    z-index: 2;
  }

  #probButton{
    position: fixed;
    bottom: 50px;
    right: 50px;
  }

  .circle {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(5);
    transition: transform 1s ease-in;
    z-index: 2;
    cursor: pointer;
  }

   .circle2 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(calc(-50% + 338px ), -50%) scale(0);
    transition: transform 0.5s ease-in;
    margin-top: -250px;
    margin-right: -200px;
    z-index: 1;
  }

</style>

<style lang="scss">
  .typer{
    margin-top: 20px;
    color: white;
  span{
      font-size: 18px;
       color: white;
    }
     .custom.char.typed{ color: #FFF !important; 
     opacity: 0.4;}
  }
 
</style>