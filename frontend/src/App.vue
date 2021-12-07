<template>
  <div id="app">
    <router-view/>
    <footer>shutdown – HS Augsburg</footer>
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
h2 {
  font-size: 23px;
}
p {
  font-size: 18px;
  margin: 0;
}
</style>
