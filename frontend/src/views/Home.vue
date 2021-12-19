
<template>
  <div class="home">
    <div class="flex-container" id="container-left">
      <Logo id="logo" :checked=false :dark=false />
      <div id="sectors-lable-container">
        <h2 class="flexrow-1">GLOBAL</h2>
        <ArrowIcon class="flexrow-1" />
      </div>
      <div id="sectors-container">
        <div class="sector-switch"><checkbox @status="toggleTraffic" /><p>Traffic</p><InformationIcon class="sector-info" :activated=false :small=true /></div>
        <div class="sector-switch"><checkbox @status="toggleEnergy"/><p>Energy</p><InformationIcon class="sector-info" :activated=false :small=true /></div>
        <div class="sector-switch"><checkbox @status="toggleAgrar"/><p>Agrar</p><InformationIcon class="sector-info" :activated=false :small=true /></div>
      </div>
      <div id="probability-container">
        <ProbabilityBox :percentage="probabilities[0]" deg="1.5" class="probBox" />
        <ProbabilityBox :percentage="probabilities[1]" deg="2.0" class="probBox" />
        <ProbabilityBox :percentage="probabilities[2]" deg="2.5" class="probBox" />
        <ProbabilityBox percentage="40" deg="FAILED" class="probBox" />
      </div>
      <Button :text='"Show Effects"'/>
    </div>
   
      <Diagramm class="diagramm" :traffic="traffic" :energy="energy" :agrar="agrar" @probabilities_changed="handleProbabilities" />
 
    <div class="flex-container" id="container-right">
      <div id="icon-container">
        <InformationIcon class="icon" :activated=false :small=false />
        <FlagIcon class="icon" :activated=false />
        <GlobeIcon class="icon" :activated=true />
        <PersonIcon class="icon" :activated=false />
      </div>
    </div>
  </div>
  
</template>

<script>
import checkbox from '@/components/buttons/shutdownCheckbox.vue'
import Button from '@/components/buttons/Button.vue'

import ProbabilityBox from '@/components/probabilityBox.vue'
import Diagramm from '@/components/diagramm/Diagramm.vue'

import Logo from '@/components/Logo.vue'
import ArrowIcon from '@/components/icons/arrowIcon.vue'
import FlagIcon from '@/components/icons/flagIcon.vue'
import GlobeIcon from '@/components/icons/globeIcon.vue'
import InformationIcon from '@/components/icons/informationIcon.vue'
import PersonIcon from '@/components/icons/personIcon.vue'

export default {
  name: 'Home',
  components: {
    checkbox,
    Button,

    ProbabilityBox,
    Diagramm,

    Logo,
    ArrowIcon,
    FlagIcon,
    GlobeIcon,
    InformationIcon,
    PersonIcon,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      traffic: true,
      energy: true,
      agrar: true,
      probabilities: new Array()
    }
  },
  methods: {
    toggleTraffic(e) {
      this.traffic = e;
    },
    toggleEnergy(e) {
      this.energy = e;
    },
    toggleAgrar(e) {
      this.agrar = e;
    },
    handleProbabilities(e) {
      this.probabilities = e;
    }
  },
}
</script>


<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.flex-container {
  height: 100vh;
}
#container-left {
  padding: 30px 0 30px 100px;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  width: 25%;
  #logo {
    margin-bottom: 50px;
    width: 100%;
  }
  .flexrow-1 {
    position: relative;
    flex: 40%;
  }
}
#container-right {
  padding: 30px 100px 30px 0;
  width: 10%;
}
#container-center {
  width: 60%;
}
/* Left Container */
#sectors-lable-container {
  display: flex;
  .flexrow-1 {
    margin-right: 15px;
  }
}
#sectors-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .sector-info {
    position: inherit;
    margin-left: 5px;
    width: 10%;
  }
}
.sector-switch {
  display: flex;
  width: 100%;
  align-items: center;
  p {
    margin-left: 20px;
  }
}
#probability-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  text-align: center;
  width: 100%;
  gap: 1.2em;
  margin: 2.4em 0;
}
/* Center Container */
/* Right Container */
#icon-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    margin: 5px 0;
  }
}
</style>