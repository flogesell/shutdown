<template>
  <div class="container">
      <h1>Living Styleguide</h1>
      <ul>
        <li id="logo">
          <h2>Logo: Varianten</h2>
          <div class="flex">
            <h3>Positiv</h3>
            <div class="positive">
              <img src="@/assets/logo/logo_positive.svg" alt="logo positive">
            </div>
            <h3>Negativ</h3>
            <div class="negative">
              <img src="@/assets/logo/logo_negative.svg" alt="logo negative">
            </div>  
          </div>  
        </li> 
      </ul>
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


<style lang="scss" scoped>

@import '@/assets/styles/_config.scss';

  .container{
    width: 100%;
    max-width: 1200px;
  }

  h1{
    text-align: center;
  }

  ul{
    list-style: none;

    li{
      border-bottom: 1px black solid;
      margin: 1.2em 0;
      padding-bottom: 1.2em;

      img{
        max-width: 360px;
      }
    }
  }

  #logo{
    div{
      margin: 1.2em;
      padding: 1.2em;
    }
    .negative{
      background: $primary;
    } 
  }

</style>
