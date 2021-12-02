<template>
  <div id="style">
      <h1>Living Styleguide</h1>
    <checkbox/>
  </div>
</template>

<script>
import checkbox from '@/components/buttons/checkbox.vue'

export default {
  name: 'App',
  components: {
    checkbox
    
  }
}
</script>

<style>
#style {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
