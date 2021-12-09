<template>
  <div id="app">
    <!-- show loader component when data is loading -->
    <div class="loader" v-if="loader">
      loading ...
    </div>
    <div v-else>
      <!-- show rendered components if data is loaded -->
      <div v-if="data">

      </div>
      <!-- show error msg if data cannot be loaded to the app -->
      <div v-else>
        404 – Error!
      </div>
    </div>
    <router-view/>
    <footer>shutdown – HS Augsburg</footer>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'App',
  created(){
    this.fetchData()
  },
  computed: {
    ...mapState(['loader', 'error']),
    ...mapFields(['data', 'lang'])
  },
  methods: {
    ...mapActions(['fetchData']),
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
  margin: 1.2em;
  gap: 1.2em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
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
</style>
