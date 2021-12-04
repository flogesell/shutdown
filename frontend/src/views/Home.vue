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
      </div>
    </div>
  </div>
</template>

<script>
import checkbox from '@/components/buttons/checkbox.vue'

export default {
  name: 'Home',
  components: {
    checkbox,
    IconFlag
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
  padding: 100px 50px;
  text-align: left;
}
#container-right {
  width: 20%;
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
}

</style>