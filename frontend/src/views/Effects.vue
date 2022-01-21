
<template>
  <div class="effects">

    <div  class="starttext">
      <p  v-if="!nextText" class="text1">{{pretexts[state]}}</p>
      <p v-if="nextText" class="text2">{{text2}}</p>
    </div>
      
    <DegreeDisplay ref="displayText" :data="data" :state="state" class="circle" :animated="animated" />
    <DegreeNumber :data="data" :state="state"  />
   
    

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
    <transition name="fade">
    <img v-if="state==2" src="../assets/imgs/3_1.png" alt="" class="third">
    </transition>
    <transition name="fade">
    <img v-if="state==2" src="../assets/imgs/3_2.png" alt="" class="third2"> 
    </transition>

    <div v-if="animated" class="flex-container" id="container-left">

      <div id="sectors-container">
          <SectorSwitch class="sector-btn" v-for="(sector, index) in sectors" :key="index" :name="index" :status="sectors[index]" :icon="false" v-on:update="updateProbs"/>
      </div>

      <div  id="probability-container"> 
        <div v-if="state!=0" @click="state=0">
          <ProbabilityBox :percentage="probabilities[0]" deg="1.5" class="probBox" />
        </div>
        <div v-if="state!=1" @click="state=1">
          <ProbabilityBox v-if="state!=1" @click="state=1" :percentage="probabilities[1]" deg="2.0" class="probBox" />
        </div>
        <div v-if="state!=2" @click="state=2">
          <ProbabilityBox v-if="state!=2" @click="state=2" :percentage="probabilities[2]" deg="2.5" class="probBox" />
        </div>
      </div>
    </div>

  </div>
  
</template>

<script>

import Button from '@/components/buttons/Button.vue'
import SectorSwitch from '@/components/buttons/sectorSwitch.vue'
import DegreeDisplay from '@/components/degreeDisplay.vue'
import DegreeNumber from '@/components/degreeNumber.vue'
import ProbabilityBox from '@/components/probabilityBox.vue'

export default {
  name: 'Info',
  components: {
    Button,
    DegreeDisplay,
    DegreeNumber,
    ProbabilityBox,
    SectorSwitch
  },
  created() {
    window.addEventListener('scroll', this.scrolled);
    this.setState();
  },
  mounted(){
    setTimeout(() => { window.addEventListener('click', this.startanimation);}, 0);
    setTimeout(() => { this.startanimation()}, 10500);
    setTimeout(() => {  document.getElementsByClassName("text1")[0].style.opacity="1";}, 700);
    setTimeout(() => {  document.getElementsByClassName("text1")[0].style.opacity="0";}, 4000);
    setTimeout(() => {  this.nextText=true;}, 6000);
    setTimeout(() => {  document.getElementsByClassName("text2")[0].style.opacity="1";}, 6000);
    this.probabilities[0] = this.$route.params.prob1,
    this.probabilities[1] = this.$route.params.prob2
    this.probabilities[2] = this.$route.params.prob3
  },
  beforeDestroy(){
    window.removeEventListener('click', this.startanimation);
  },
  data() {
    return {
      data: this.$store.state.results.degrees,
      scrollamount: 0,
      state: 0,
      text: ["click to skip",],
      animated: false,
      probabilities2: 0,
      probabilities: [],
      nextText: false,
      text2: "but even with a complete shutdown, reaching the 1.5° goal isnt insured.",
      pretexts: ["Your shutdown scenario will most likely cause a global warming of 1.5° celsius","Your shutdown scenario will most likely cause a global warming of 2° celsius","Your shutdown scenario will most likely cause a global warming of 2.5° celsius"],
      speed: 60,
      totalEmissions: 49350,
      sectorEmissions: [8920,17390,7830,15210],
    }
  },
  computed: {
    sectors() {
      const sectors = this.$store.state.sectors;
      delete sectors.Export;
      return sectors;
    },
  },
  methods: {
    updateProbs(){    
      let n=0;
      let t = this.totalEmissions;
      
      for (const [key, value] of Object.entries(this.sectors)) {
        if(value == false)
        t-=this.sectorEmissions[n];
        n++;
        console.log(key)
      }
      this.co2_to_probabilities((t /  1000) * 80)
      this.setState2();
    },
     handleProbabilities(e) {
      this.probabilities = e;
    },
    setState(){
      let n = this.$route.params.prob1;
      let m = 0;
      if(this.$route.params.prob2 > n){
        n = this.$route.params.prob2
        m = 1
      }
      if(this.$route.params.prob3 > n){
        n = this.$route.params.prob3
        m = 2
      }
      this.state = m;
    },
    setState2(){
      let n = this.probabilities[0];
      let m = 0;
      let o = this.probabilities[2];
      if(o == 18.3){
        o = 18.3
      }
      if(o == 16.8){
        o = 16.8
      }
  
      if(this.probabilities[1] > n){
        n = this.probabilities[1]
        m = 1
      }
       console.log(this.probabilities[2] + " props")
       console.log(n + " n")
       console.log(this.probabilities[2] + " > " + n)
       console.log(18.3 > 7.7)
      if(o > n){
        n = this.probabilities[2]
        m = 2
      }
      console.log(m + " m");
      this.state = m;
    },
    tryAgain() {
      this.$router.push('/')
      this.$store.commit('RESET')
    },
    scrolled(){
      this.scrollamount = window.pageYOffset;
      this.state = Math.round(window.pageYOffset/1300);
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
      setTimeout(() => { this.animated = true; }, 2000);
      setTimeout(() => {document.getElementsByClassName("circle2")[0].style.transform="translate(calc(-50% + 338px ), -50%) scale(1)"}, 700);
       setTimeout(() => {this.$refs.displayText.appear();}, 2100);
      //setTimeout(() => {document.getElementsByClassName("circle")[0].style.transform="translate(-50%, -50%) scale(1)"}, 4000);
    },
     co2_to_probabilities(co2) {
            let probability_table = [0, 17, 33, 50, 67, 83];
            let co2_table = [[1350,  900,  650,  500,  400,  300],
                             [4000, 2300, 1700, 1350, 1150,  900],
                             [5000, 3300, 2500, 2050, 1700, 1400]];

            let indices = [-1, -1, -1];

            for(let i = 0; i < co2_table[0].length; i++)
            {
                for(let j = 0; j < co2_table.length; j++)
                {
                    if(co2_table[j][i] > co2)
                    {
                        indices[j] = i;
                    }
                }
            }

            let probabilities = [0, 0, 0];

            for(let i = 0; i < co2_table.length; i++) {
                if(indices[i] == co2_table[0].length - 1) {
                    probabilities[i] = probability_table[indices[i]].toFixed(1);
                }
                else if(indices[i] == -1) {
                    probabilities[i] = probability_table[0].toFixed(1);
                }
                else {
                    probabilities[i] = ((co2_table[i][indices[i]] - co2) / (co2_table[i][indices[i]] - co2_table[i][indices[i] + 1]) * (probability_table[indices[i] + 1] - probability_table[indices[i]]) + probability_table[indices[i]]).toFixed(1);
                }
            }
            this.probabilities = probabilities
        },
  },
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/_config.scss';

#container-left {
 position: fixed;
 left: 50px;
 top: 50px;
}
 



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

  .third{
    height: 50vh;
    min-height: 370px;
    max-height: 750px;
    position: absolute;
    left: -80px;
    top: 200px;
  }

  .third2{
    height: 35vh;
    min-height: 270px;
    position: absolute;
    right: 0px;
    bottom: 100px;
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
        transition: opacity 0.5s ease-out;
        cursor: pointer;
        white-space: nowrap;
        
        p{
          white-space: nowrap;
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

  .text1{
    transition: opacity 1s ease-in-out;
    opacity: 0;
  }

  .text2{
    transition: opacity 1s;
    opacity: 0;
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
    color: #444;
  }

  #probability-container {

  

  //grid-gap: 1.2em;

  
  text-align: left;
  width: 300px;
  z-index: 100;
  position: fixed;
  bottom: 50px;
  left: 50px;

  div{
    cursor: pointer;
  }

  #probability-headline {
    grid-column: span 2;
  }

  .probBox, #probButton {
    width: 100px;
    height: 100px;
    float: left;
    align-self: center;
    margin-left: -5px;
    margin-right: 15px;
    //place-self: center; 
  }
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
   .starttext{

    .vue-typer .custom.char {
      color: white;
      //background-color: #1E1E1E;
    }
    .vue-typer .custom.char.selected {
      background-color: #264F78;
    }

    .vue-typer .custom.caret {
      width: 10px;
      background-color: white;
    }
  }
</style>