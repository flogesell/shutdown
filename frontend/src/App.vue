<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/styleguide">Styleguide</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    
    &.router-link-exact-active {
      color: #42b983;
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
