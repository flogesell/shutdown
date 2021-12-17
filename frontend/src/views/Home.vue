
<template>
  <div class="home">
    <div class="flex-container" id="container-left">
      <img class="logo" src="@/assets/logo/logo_positive.svg" alt="logo positive">
      <h2>GLOBAL</h2>
      <div id="sectors-container">
        <div class="sector-switch"><checkbox/><p>Verkehr</p></div>
        <div class="sector-switch"><checkbox/><p>Energie</p></div>
        <div class="sector-switch"><checkbox/><p>Agrar</p></div>
      </div>
    </div>
   
      <Diagramm class="diagramm" />
 
    <div class="flex-container" id="container-right">
      <div id="icon-container">
        <img :src="publicPath + 'img/icons/Vereinigungsmenge 8.svg'" alt="" />
        <img :src="publicPath + 'img/icons/Icon_awesome-globe-americas.svg'" alt="" />
        <img :src="publicPath + 'img/icons/Icon_ionic-ios-flag.svg'" alt="" />
        <img :src="publicPath + 'img/icons/Icon_ionic-ios-man.svg'" alt="" />
      </div>
      <div id="probability-container">
        <ProbabilityBox percentage="13" deg="1.5" class="probBox" />
        <ProbabilityBox percentage="27" deg="2.0" class="probBox" />
        <ProbabilityBox percentage="60" deg="2.5" class="probBox" />
      </div>
    </div>
  </div>
  
</template>

<script>
import checkbox from '@/components/buttons/Switch.vue'
import ProbabilityBox from '@/components/probabilityBox.vue'
import Diagramm from '@/components/diagramm/Diagramm.vue'

export default {
  name: 'Home',
  components: {
    checkbox,
    ProbabilityBox,
    Diagramm
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
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
  padding: 100px;
  text-align: left;
  .logo {
    margin-bottom: 100px;
  }
}
#container-right {
  padding: 100px;
}
#container-center {
  width: 60%;
}
/* Left Container */
#sectors-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.sector-switch {
  display: flex;
  width: 100%;
  align-items: center;
  p {
    margin-left: 20px;
  }
}
/* Center Container */
/* Right Container */
#icon-container {
  width: 100%;
  display: flex;
  img {
    margin: 0 5px;
  }
}
#probability-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  gap: 1.2em;
  margin: 2.4em 0;
}
</style>