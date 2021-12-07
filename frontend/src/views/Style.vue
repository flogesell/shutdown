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
            <div class="field" id="secondary" :style="{background: '#A3A3A3'}"><p>#A3A3A3</p></div>
            <div class="field" id="secondary" :style="{background: '#ffbb00'}"><p>#FFBB00</p></div>    
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem non quis natus laudantium aliquam atque laborum obcaecati deleniti, amet eveniet doloribus similique aperiam voluptatibus nam delectus aspernatur. Porro, consequuntur atque.</p>   
        </li>
        <li id="icon">
          <h2>Icon</h2>
        </li> 
        <li id="switch">
          <h2>Switch</h2>
          <div class="flex"><CheckboxMoritz/></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta quia alias laborum laudantium obcaecati repellat itaque a recusandae aut expedita nam neque, nostrum ducimus doloremque vero sapiente dolores perspiciatis.</p>
          <div class="flex"><Checkbox/></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta quia alias laborum laudantium obcaecati repellat itaque a recusandae aut expedita nam neque, nostrum ducimus doloremque vero sapiente dolores perspiciatis.</p>
        </li>
        <li id="diagram">
          <h2>Diagram</h2>
          <div class="flex">
            <probability-box :percentage='Math.round(Math.random()*100)' :deg="'1,5°C'"/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro deserunt dolores non, vel asperiores quidem, illo sit fugit molestias beatae obcaecati! Vel velit voluptatem deleniti nisi quis, sit incidunt.</p>
        </li> 
        <li id="button">
          <h2>Button</h2>
          <div class="flex"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro deserunt dolores non, vel asperiores quidem, illo sit fugit molestias beatae obcaecati! Vel velit voluptatem deleniti nisi quis, sit incidunt.</p>
        </li> 
      </ul>
  </div>
</template>

<script>
import CheckboxMoritz from '@/components/buttons/Switch.vue';
import Checkbox from '@/components/buttons/Checkbox.vue'
import probabilityBox from '@/components/probabilityBox.vue'

export default {
  name: 'App',
  components: {
    Checkbox,
    CheckboxMoritz,
    probabilityBox
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
      border-top: 1px black solid;
      margin: 1.2em 0;
      padding-top: 1.2em;

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
        color: white;
        font-weight: 500;
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
