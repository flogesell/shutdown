
<template>
  <div class="effects">
    <div class="logo-wrapper">Your <Logo id="logo" :checked=false :dark=false /> scenario</div>
    <div class="text">
      <p>Your personal effects of your shutdown scenario will be displayed here later.</p>
      </div>
    <Button :text='"Try</br>again!"' id="probButton" @click="tryAgain" />
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
  },
  methods: {
    tryAgain() {
      this.$router.push('/')
      this.$store.commit('RESET')
    },
  },
}
</script>


<style lang="scss" scoped>
  .effects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .logo-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
    }
  }
  #logo {
    width: 100%;
    max-width: 340px;
    margin: 0 25px;
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