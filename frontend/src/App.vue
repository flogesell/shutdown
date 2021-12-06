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
</style>
