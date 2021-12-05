<template>
  <div class="home">
    <div class="flex-container" id="container-left">
      <h2>GLOBAL</h2>
      <div id="sectors-container">
        <div class="sector-switch"><checkbox/><p>Verkehr</p></div>
        <div class="sector-switch"><checkbox/><p>Energie</p></div>
        <div class="sector-switch"><checkbox/><p>Agrar</p></div>
      </div>
    </div>
    <div class="flex-container" id="container-center"></div>
    <div class="flex-container" id="container-right">
      <div id="icon-container">
        <img :src="publicPath + 'img/icons/Vereinigungsmenge 8.svg'" alt="" />
        <img :src="publicPath + 'img/icons/Icon_awesome-globe-americas.svg'" alt="" />
        <img :src="publicPath + 'img/icons/Icon_ionic-ios-flag.svg'" alt="" />
        <img :src="publicPath + 'img/icons/Icon_ionic-ios-man.svg'" alt="" />
      </div>
      <div id="probability-container">
        <!--<ProbabilityBox number="45°" arcStart="30" arcEnd="145" class="probBox" />-->
        <ProbabilityBox percentage="80" deg="1.5°" class="probBox" />
      </div>
    </div>
  </div>
</template>

<script>
import checkbox from '@/components/buttons/checkbox.vue'
import ProbabilityBox from '@/components/probabilityBox.vue'

export default {
  name: 'Home',
  components: {
    checkbox,
    ProbabilityBox
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: space-between;
}
.flex-container {
  height: 100vh;
}
#container-left {
  width: 20%;
  padding: 100px;
  text-align: left;
}
#container-right {
  width: 20%;
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


</style>