
<template>
  <div class="info">
    <Logo id="logo" :checked=false :dark=false />
    <div class="text">
      <h2>Informations</h2>
      <p>Later various elements of out application will be explained here and supported by the scientific sources.</p>
      </div>
    <Button :text='"Back"' id="probButton" @click="$router.push('/')" />
  </div>
  
</template>

<script>
import Logo from '@/components/Logo.vue'
import Button from '@/components/buttons/Button.vue'

export default {
  name: 'Info',
  components: {
    Button,
    Logo
  },
  data() {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  #logo {
    margin-bottom: 50px;
    width: 100%;
    max-width: 340px;
  } 

  .text {
    margin: 50px 0;
    text-align: center;
    h2 {
      margin-bottom: 25px;
    }
  }

  button {
    max-width: 130px;
  }
</style>