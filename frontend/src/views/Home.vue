
<template>
  <div class="home">
    <Intro v-if="!introAlreadySeen"/>
    <div class="flex-container" id="container-left">
      <Logo id="logo" :checked=false :dark=false />
      <div id="sectors-lable-container">
        <h2 class="flexrow-1">GLOBAL</h2>
        <ArrowIcon class="flexrow-1" />
      </div>
      <div id="sectors-container">
        <sectorSwitch v-for="(sector, index) in sectors" :key="index" :name="index" :status="sectors[index]"/>
      </div>
      <div id="probability-container">
        <h2>Probabilities for reaching climate goals</h2>
        <ProbabilityBox :percentage="probabilities[0]" deg="1.5" class="probBox" />
        <ProbabilityBox :percentage="probabilities[1]" deg="2.0" class="probBox" />
        <ProbabilityBox :percentage="probabilities[2]" deg="2.5" class="probBox" />
        <Button :text='"Show Effects"'/>
      </div>
      
    </div>
    <div class="flex-container" id="container-center">
      <Diagramm class="diagramm" :traffic="traffic" :energy="energy" :agrar="agrar" @probabilities_changed="handleProbabilities" />
    </div>
 
    <div class="flex-container" id="container-right">
      <div id="info-container" class="icon-container">
        <div class="icon-wrapper"><span>Info</span><InformationIcon class="icon" :activated=false :small=false /></div>
      </div>
      <div id="sector-container" class="icon-container">
        <div class="icon-wrapper" @click="toggleTab('world')" :class="(this.$store.state.app.activeTab==='world')?'active':''">
          <span>World</span>
          <GlobeIcon class="icon" :activated="(this.$store.state.app.activeTab==='world')?true:false" />
        </div>
        <div class="icon-wrapper" @click="toggleTab('sectors')" :class="(this.$store.state.app.activeTab==='sectors')?'active':''">
          <span>Sectors</span>
          <FlagIcon class="icon" :activated="(this.$store.state.app.activeTab==='sectors')?true:false" />
        </div>
        <div class="icon-wrapper" @click="toggleTab('person')" :class="(this.$store.state.app.activeTab==='person')?'active':''">
          <span>Per person</span>
          <PersonIcon class="icon" :activated="(this.$store.state.app.activeTab==='person')?true:false" />
        </div>
      </div>
      
    </div>
  </div>
  
</template>

<script>
import sectorSwitch from '@/components/buttons/sectorSwitch.vue'
import Button from '@/components/buttons/Button.vue'
import Intro from '@/components/intro/Intro.vue'

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
    sectorSwitch,
    Button,
    Intro,

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
    toggleTab(tab) {
      this.$store.commit('CHANGE_ACTIVE_TAB', tab)
    },
    handleProbabilities(e) {
      this.probabilities = e;
    }
  },
  computed: {
    sectors() {
      const sectors = this.$store.state.sectors;
      return sectors;
    },
    introAlreadySeen() {
      return localStorage.getItem('intro')
    }
  }
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
  flex-direction: column;
  flex-wrap: wrap;
  width: 25%;
  z-index: 100;
  #logo {
    margin-bottom: 50px;
    width: 100%;
    max-width: 225px;
  }
  .flexrow-1 {
    position: relative;
    flex: 40%;
  }

}
#container-right {
  padding: 30px 100px 30px 0;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 100;
  min-width: 300px;
}

#container-center {
  flex-grow: 1;
  left: 0px;
  position: absolute;
  z-index: 1;
  margin: 30px 0;
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
  margin-top: auto;
  h2 {
    text-align: left;
  }
}
/* Center Container */
/* Right Container */
#sector-container {
  margin-top: auto;
}

.icon-container {
  cursor: pointer;
  user-select: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    span {
        font-family: Roboto;
        font-size: 25px;
    }
    
    &.active {
      span {
        font-weight: bold;
        font-size: 25px;
      }
    }
  }
  .icon {
      width: 35px;
      height: 35px;
      margin: 5px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    & svg {
    height: 100%;
    width: 100%; 
    & path {
      fill: #A3A3A3 !important;
    }
    }
  }
}
</style>