<template>
  <div id="app">
    <!-- show loader component when data is loading -->
    <div class="loader" v-if="loader">
      loading ...
    </div>
    <!-- show rendered components if data is loaded -->
    <router-view v-if="data && !loader && !error && (width>=1000)"/>
    <!-- show error msg if data cannot be loaded to the app -->
    <div v-if="error">
      404 – Error!
    </div>
    <div v-if="width<=1000" class="unspported-browser">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/OOjs_UI_icon_alert.svg/240px-OOjs_UI_icon_alert.svg.png">
      <h2>You are using an unsupported Browser</h2>
      <p>This website is currently only intended for use on desktop computers with Firefox, Chrome or Safari</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'App',
  data() {
    return {
      width: 0,
    }
  },
  created(){
    this.fetchData();
    window.addEventListener("resize", this.setWidth);
    this.width = window.innerWidth;
    if(this.currentRouteName == "Home") {
      document.body.style.height = "100%";
      document.body.style.overflowY = "hidden";
    } else if(this.currentRouteName == "info") {
      document.body.style.height = "auto";
      document.body.style.overflowY = "auto";
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.setWidth);
  },
  computed: {
    ...mapState(['loader', 'error']),
    ...mapFields(['data', 'lang']),
    currentRouteName() {
        return this.$route.name;
    },
  },
  methods: {
    ...mapActions(['fetchData']),
    setWidth() {
      this.width = window.innerWidth;
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_config.scss';

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $primary;
  gap: 1.2em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
}

#nav {
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 .6em;
    
    &.router-link-exact-active {
      color: $color;
    }
  }
}
h2 {
  font-size: 23px;
}
p {
  font-size: 18px;
  margin: 0;
}

.flex_centered{
  display: flex;
  justify-content: center;
  align-items: center;
}

.unspported-browser {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  img, h2 {
    margin-bottom: 15px;
  }
}

</style>
