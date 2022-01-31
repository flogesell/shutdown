
<template>
  <div class="home">
    <Intro v-if="!introAlreadySeen"/>
    
    <div class="position" @click="resetZoom"> <h1 :class="(getPosition.back)?'back':''"><Icon v-if="getPosition.back" icon="backwards" :activated="true"/>{{getPosition.tab}}</h1></div>
    <div class="flex-container" id="container-left">
      <Logo id="logo" :checked=false :dark=false />
      <div id="sectors-lable-container">
        <div class="sector-headline-container"> 
          <h2 class="flexrow-1">Global Emission Sectors</h2>
          <div class="reset-button" @click="reset">
            <Icon icon="reset" :activated="true"/>
          </div>
        </div>
      </div>
      <div id="sectors-container" :class="getPosition.tab.replace(' ','-').toLowerCase()">
        <SectorSwitch class="sector-btn" v-for="(sector, index) in sectors" :key="index" :name="index" :test="'flex-order: ' + index" :status="sectors[index]" v-on:toggleInfobox="toggleSectorInfobox(index)/*infoboxOpen =! infoboxOpen*/" v-on:makeInfoboxHeadline="makeHeadline(index)" />
        <h2 class="export-headline">Export-Adjusted Data</h2>
        
      </div>

      <div id="sector-container" class="icon-container" v-if="!getPosition.back">
        <tabContainer v-for="tab in tabs" :key="tab" :tab="tab"/>
      </div>
      
    </div>
    <div class="flex-container" id="container-center">
      <Diagramm class="diagramm" :traffic="traffic" :energy="energy" :agriculture="agriculture" @probabilities_changed="handleProbabilities" />
    </div>
    <div class="flex-container" id="container-right">
      <div id="info-container" class="icon-container">
        <iconButton @info="$router.push('info')" action="info" icon="info" :activated="true"/>
      </div>
      
      <div id="probability-container">
        <h2 id="probability-headline">Probabilities for Reaching Climate Goals</h2>
        <ProbabilityBox :percentage="probabilities[0]" deg="1.5" class="probBox" />
        <ProbabilityBox :percentage="probabilities[1]" deg="2.0" class="probBox" />
        <ProbabilityBox :percentage="probabilities[2]" deg="2.5" class="probBox" />
        <Button @click="$router.push(`/effects/${probabilities[0]}/${probabilities[1]}/${probabilities[2]}`)" :text='"Show</br>Effects"' id="probButton" />
      </div>
      
    </div>
    <Infobox id="infobox" :headline="infoboxHeadline" :open="infoboxOpen" v-on:toggleInfobox="infoboxOpen = false"/>
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

import Icon from '@/components/icons/icon.vue'
import Logo from '@/components/Logo.vue'


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
    Icon,
    iconButton,
    tabContainer
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      traffic: true,
      energy: true,
      agriculture: true,
      probabilities: new Array(),
      infoboxOpen: false,
      infoboxHeadline: "Traffic",
      oldSector: "",
    }
  },
  methods: {
    resetZoom() {
      this.$store.commit('RESET_ACTIVE_SPECIFIC')
    },
    toggleTab(tab) {
      this.$store.commit('CHANGE_ACTIVE_TAB', tab)
    },
    reset() {
      this.$store.commit('RESET')
    },
    handleProbabilities(e) {
      this.probabilities = e;
    },
    makeHeadline(sector) {
      this.$store.commit('CHANGE_INFOBOX_HEADLINE', sector)
    },
    toggleSectorInfobox() {
      if(this.$store.state.app.infoboxOpen === false) {
        this.$store.commit('TOGGLE_INFOBOX')
      } else {
        this.$store.commit('OPEN_INFOBOX')
      }
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
      return this.$store.state.app.intro;
    },
    getPosition() {
      if(this.$store.state.app.activeTab && this.$store.state.app.activeSpecific.length === 0) {
        return { tab: this.$store.state.app.activeTab, back: false}
      } else return { tab: this.$store.state.app.activeSpecific, back: true};
    },
  }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/_config.scss';

.home {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.flex-container {
  height: 100vh;
}
.position {
  position: absolute;
  width: 100%;
  text-align: center;
  padding-top: 30px;
  z-index: 6;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    &.back {
      cursor: pointer;
    }
    
  }
}
#container-left {
  padding: 30px 0 30px 60px;
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 25%;
  z-index: 100;
  min-width: 370px;
  #logo {
    margin-bottom: 50px;
    width: 100%;
    max-width: 225px;
  }
  .flexrow-1 {
    position: relative;
    flex: 40%;
  }
  #sector-container .icon-wrapper {
    flex-direction: row-reverse;
  }

}
#container-right {
  padding: 30px 60px 30px 0;
  width: 13%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 100;
  min-width: 240px;
  #info-container {
    margin-bottom: 50px;
  }
}

#container-center {
  flex-grow: 1;
  left: 0px;
  z-index: 1;
  padding: 30px 0;
  display: flex;
  flex-grow: 1;
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
.per-sector .export, .per-sector .export-headline {
  display: none;
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
  .export-headline {
    margin: 15px 0;
    order: 1;
  }
  .sector-switch.export {
    order: 2;
  }
  
}

.sector-headline-container {
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
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
  display: flex;
  width: 100%;
  height: auto;
  grid-template-columns: 50% 50%;
  //margin-top: auto;
  grid-gap: 10px 0;
  flex-direction: column;
  //grid-gap: 1.2em;

   .probBox:nth-child(3), #probButton {
      //margin-left: -50px !important;
    }

  .probBox, #probButton {
    max-width: 130px;
    max-height: 130px;
    width: 70%;
    align-self: center;
    //margin-left: -7px;
    //place-self: center; 
  }

  #probability-headline {
    text-align: center;
  }


}
/* Center Container */
/* Right Container */
#sector-container {
  margin-top: auto;
}
.sector-btn:not(.disabled):hover {
  font-weight: bold;
  cursor: pointer;
}

.sector-btn.disabled  {
  color: gray;
}

.reset-button {
  display: flex;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
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
        font-size: 1.2rem;
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

//----- Media Screen small desktop -----//@at-root
@media screen and (max-height: 720px) {
  #probability-container {
    width: 70%;
  }
}
</style>