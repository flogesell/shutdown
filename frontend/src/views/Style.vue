<template>
  <div class="container">
      <h1>Living Styleguide</h1>
      <ul>
        <li id="logo">
          <h2>Logo</h2>
          <div class="flex">
            <div class="positive">
              <img src="@/assets/logo/logo_positive.svg" alt="logo positive">
            </div>
            <div class="negative">
              <img src="@/assets/logo/logo_negative.svg" alt="logo negative">
            </div>  
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem non quis natus laudantium aliquam atque laborum obcaecati deleniti, amet eveniet doloribus similique aperiam voluptatibus nam delectus aspernatur. Porro, consequuntur atque.</p>
        </li>
        <li id="color">
          <h2>Farbwelt</h2>
          <div class="flex">
            <div class="field" id="primary" :style="{background: '#444444'}"><p>#444444</p></div>
            <div class="field" id="secondary" :style="{background: '#707070'}"><p>#707070</p></div>
            <div class="field" id="secondary" :style="{background: '#ffbb00'}"><p>#ffbb00</p></div>    
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem non quis natus laudantium aliquam atque laborum obcaecati deleniti, amet eveniet doloribus similique aperiam voluptatibus nam delectus aspernatur. Porro, consequuntur atque.</p>   
        </li>
        <li id="switch">
          <h2>Switch</h2>
          <checkbox/>
        </li>
        <li id="switch">
          <h2>Switch</h2>
          <checkbox/>
        </li>  
      </ul>
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

  .flex{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: center;
    gap: 1.2em;
    margin: 2.4em 0;

    div{
      display: inline-flex;
      padding: 1.2em;
      flex: 1;
    }
  }

  #color{
    .field{
      flex: 0 0 100px;
      height: 100px;
      background: red;
      display: flex;
      justify-content: center;
      align-items: center;

      p{
        transition: opacity 1s;
        opacity: 0;
        mix-blend-mode: difference; 
      }

      &:hover{
        p{
          opacity: 1;
        }
      }
    }
  }

  #logo{
    .negative{
      background: $primary;
    } 
  }

</style>
