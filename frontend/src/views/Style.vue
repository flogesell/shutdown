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
          <div class="flex">
            <div class="positive">
              <Logo :checked=false :dark=false />
            </div>
            <div class="positive">
              <Logo :checked=false :dark=true />
            </div>
          </div>
          <p>Das Logo existiert in zwei Varianten. Auf hellen Untergründen wird stets die positive Version verwendet. Auf dunklen Hintergründen soll die negative Variante eingesetzt werden. Außerdem ist der 'Switch-Button', welcher eine zentrale Funktion in der Applikation darstellt, ebenfalls enthalten und sollte den eingesetzten Buttons weitesgehend ähnlich sein.</p>
        </li>
        <li id="color">
          <h2>Color</h2>
          <div class="flex">
            <div class="field" id="primary" :style="{background: '#F2F2F2', border: '1px black solid'}"><p>#F2F2F2</p></div>
            <div class="field" id="primary" :style="{background: '#444444'}"><p>#444444</p></div>
            <div class="field" id="secondary" :style="{background: '#A3A3A3'}"><p>#A3A3A3</p></div>
            <div class="field" id="secondary" :style="{background: '#ffbb00'}"><p>#FFBB00</p></div>    
          </div>
          <p>Die Farbpalette beschränkt sich auf drei Grautöne. Der Hintergrund des Interfaces wird durch einen sanften Hellgrau-Ton abgebildet. Schriften werden stets im dunkelsten Grauton gesetzt, um einen optimalen Kontrast zu garantieren. Konturen, Linien und weitere visuelle Elemente erhalten ein helleres Grau. In Kombination mit einer warmen Akzentfarbe kann der Blick eines potenziellen Nutzers gezielt geführt und fokussiert werden.</p>   
        </li>
        <li id="typo">
          <h2>Typography</h2>
          <div class="flex">
            <h1>Chapter – Roboto Bold, 2.4em</h1>
            <h2>Headline – Roboto Bold, 1.6em</h2>
            <h3>Subline – Roboto Bold, 1.2em</h3>
            <p>Text positiv – Roboto Regular, 1em</p>
            <p class="negative">Text negativ – Roboto Medium, 1em</p>
          </div>
          <p>Als Schriftfamilie kommt stets der Font 'Roboto' in den Schriftschnitten 'Regular' und 'Bold' zum Einsatz. Auf dunklen Untergründen wird statt 'Regular' der Schnitt 'Medium verwendet'.</p>   
        </li>
        <li id="icon">
          <h2>Icon</h2>
          <div class="flex">
            <FlagIcon @click.native="changeActive" :activated=false class="icons" />
            <GlobeIcon :activated=true class="icons"/>
            <PersonIcon :activated=false class="icons"/>
            <ArrowIcon :activated=false class="icons"/>
          </div>
        </li> 
        <li id="switch">
          <h2>Switch</h2>
          <div class="flex"><CheckboxMoritz/></div>
          <p>Der Switch-Button erinnert an Bestandteile des Logos und zählt als zentrales Element im Interface.</p>
          <div class="flex"><Checkbox/></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta quia alias laborum laudantium obcaecati repellat itaque a recusandae aut expedita nam neque, nostrum ducimus doloremque vero sapiente dolores perspiciatis.</p>
        </li>
        <li id="diagram">
          <h2>Diagram</h2>
          <div class="flex">
            <Probability-box :percentage='Math.round(Math.random()*100)' :deg="'1,5'"/>
            <Probability-box :percentage='Math.round(Math.random()*100)' :deg="'2,5'"/>
            <Probability-box :percentage='Math.round(Math.random()*100)' :deg="'3,5'"/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro deserunt dolores non, vel asperiores quidem, illo sit fugit molestias beatae obcaecati! Vel velit voluptatem deleniti nisi quis, sit incidunt.</p>
        </li> 
        <li id="button">
          <h2>Button</h2>
          <div class="flex">
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro deserunt dolores non, vel asperiores quidem, illo sit fugit molestias beatae obcaecati! Vel velit voluptatem deleniti nisi quis, sit incidunt.</p>
        </li> 
      </ul>
  </div>
</template>

<script>
import CheckboxMoritz from '@/components/buttons/Switch.vue'
import Checkbox from '@/components/buttons/Checkbox.vue'

import ProbabilityBox from '@/components/probabilityBox.vue'

import FlagIcon from '@/components/icons/flagIcon.vue'
import GlobeIcon from '@/components/icons/globeIcon.vue'
import PersonIcon from '@/components/icons/personIcon.vue'
import ArrowIcon from '@/components/icons/arrowIcon.vue'

import Logo from '@/components/Logo.vue'

export default {
  name: 'App',
  components: {
    Checkbox,
    CheckboxMoritz,
    ProbabilityBox,
    FlagIcon,
    GlobeIcon,
    PersonIcon,
    ArrowIcon,
    Logo,
  },
  methods: {
    changeActive() {
      let icn = document.getElementsByClassName(".icons")
      console.log(icn);
      icn.activated=false; // Make all buttons green
      this.activated=true; // Make the clicked button black
    }
  },
  mounted: function() {
    this.changeActive();
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
        mix-blend-mode: difference;
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

    img{
      max-width: 100%;
    }
  }

  #typo{
    .flex{
      flex-flow: column nowrap;
      background: white;
      padding: 1em;

      .negative{
        background: $primary;
        color: $secondary;
        padding: 1em;
      }
    }
  }

</style>
