<template>
  <button v-on:click="$emit('click')">
      <div class="deg-perc-wrapper">
        <h3 v-html="text"></h3>
        <Icon class="button-arrow" icon="hover2" :activated="true"/>
        <!--<h2 id="arrow">{{ (backwards ? '&larr;' : '&rarr;') }}</h2>-->
      </div>
      <svg viewBox="0 0 35 35">
          <path id="arc" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-width="1.5" :style="'--from-width:'+Number(oldVal)+'px; --to-width:'+Number(percentage)+'px;'" :key="percentage"/>
          <path id="circle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-width="1.5" />
      </svg>
  </button>
</template>

<script>
import Icon from '@/components/icons/icon.vue'

export default {
  name: 'Button',
  components: {
    Icon,
  },
  props: {
    text: String,
    backwards: Boolean
  },
  methods: {
    shootArrow() {
      /*var arrow = document.getElementById('arrow');
      arrow.style.transform = 'translateX(10%)';
      setTimeout(() => {  
        arrow.style.transform = 'translateX(0)'; 
      }, 500);*/
    },
    prepArrow() {
      //var arrow = document.getElementById('arrow');
      //arrow.style.transform = 'translateX(-10%)';
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_config.scss';

.probability-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  user-select: none;
}
#circle {
  //stroke: $secondary;
  fill: $primary;
}

.deg-perc-wrapper {
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.button-arrow {
  width: 30px;
  transition: transform .5s ease-in-out;
}

button {
  transition: transform .5s;
  cursor: pointer;
  width: 100%;
  border-radius: 50%;
  border: none;
  font-family: Roboto;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  h3 {
    margin-top: 10px;
    margin-bottom: -10px;
  }

  &:hover {
    transform: scale(1.125);
    cursor: pointer;
  }
}
button:hover .button-arrow {
  transform: rotate(45deg);
}
//----- Media Screen small desktop -----//@at-root
@media screen and (max-height: 720px) {
    button {
        font-size: .7em;
    }
}

.probability-container {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
        user-select: none;
    }

</style>