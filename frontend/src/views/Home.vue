
<template>
  <div class="home">
    <Intro v-if="!introAlreadySeen"/>
    <Infobox id="infobox" :headline="'Energy'" :content="'the energysector is a highly inefficient sector!'" :open="infoboxOpen" v-on:toggleInfobox="infoboxOpen =false"/>
    <div class="flex-container" id="container-left">
      <Logo id="logo" :checked=false :dark=false />
      <div id="sectors-lable-container">
        <h2 class="flexrow-1">Global</h2>
      </div>
      <div id="sectors-container">
        <SectorSwitch  class="sector-btn" v-for="(sector, index) in sectors" :key="index" :name="index" :status="sectors[index]" v-on:toggleInfobox="infoboxOpen =! infoboxOpen"/>
        <div class="reset-button">
          <span id="reset-text">Reset</span>
          <ArrowIcon class="icon" />
        </div>
      </div>
      <h2 id="probability-headline">Probabilities for reaching climate goals</h2>
      <div id="probability-container">
        <ProbabilityBox :percentage="probabilities[0]" deg="1.5" class="probBox" />
        <ProbabilityBox :percentage="probabilities[1]" deg="2.0" class="probBox" />
        <ProbabilityBox :percentage="probabilities[2]" deg="2.5" class="probBox" />
        <Button :text='"Show Effects"' id="probButton" />
      </div>
      
    </div>
    <div class="flex-container" id="container-center">
      <Diagramm class="diagramm" :traffic="traffic" :energy="energy" :agrar="agrar" @probabilities_changed="handleProbabilities" />
    </div>
 
    <div class="flex-container" id="container-right">
      <div id="info-container" class="icon-container">
        <iconButton @info="$store.commit('TOGGLE_INFO')" action="info" icon="info"/>
      </div>
      <div id="sector-container" class="icon-container">
        <tabContainer v-for="tab in tabs" :key="tab" :tab="tab"/>
      </div>
      
    </div>
  </div>
  
</template>

<script>
import SectorSwitch from '@/components/buttons/sectorSwitch.vue'
import tabContainer from '@/components/buttons/tabContainer.vue'
import iconButton from '@/components/buttons/iconButton.vue'
import Button from '@/components/buttons/Button.vue'
import Intro from '@/components/intro/Intro.vue'

import ProbabilityBox from '@/components/probabilityBox.vue'
import Diagramm from '@/components/diagramm/Diagramm.vue'
import Infobox from '@/components/infoboxes/Infobox.vue'

import Logo from '@/components/Logo.vue'
import ArrowIcon from '@/components/icons/arrowIcon.vue'


export default {
  name: 'Home',
  components: {
    SectorSwitch,
    Button,
    Intro,

    ProbabilityBox,
    Diagramm,
    Infobox,

    Logo,
    ArrowIcon,
    iconButton,
    tabContainer
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      traffic: true,
      energy: true,
      agrar: true,
      probabilities: new Array(),
      infoboxOpen: false,
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
    tabs() {
      const tabs = this.$store.state.app.tabs;
      return tabs;
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
    margin-bottom: 15px;
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
#infobox {
  z-index: 101;
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
#probability-headline {
  margin: 15px 0;
  margin-top: auto;
}
#probability-container {
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 50% 50%;
  grid-gap: 1.2em;
}
/* Center Container */
/* Right Container */
#sector-container {
  margin-top: auto;
}

.reset-button {
  display: flex;
  font-size: 1.1em;
  margin-top: 15px;
  #reset-text {
    margin-right: 15px;
  }
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
        font-size: 1.4em;
    }
    
    &.active {
      span {
        font-weight: bold;
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