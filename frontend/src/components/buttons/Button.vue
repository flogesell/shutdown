<template>
  <button v-on:click="$emit('click')">
      <div class="deg-perc-wrapper">
        <h3 v-html="text"></h3>
        <h2 id="arrow">{{ (backwards ? '&larr;' : '&rarr;') }}</h2>
      </div>
      <svg viewBox="0 0 35 35">
            <path id="circle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-width="1.5" />
        </svg>
  </button>
</template>

<script>
export default {
  name: 'Button',
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
        fill: $button-grey;
    }

    .deg-perc-wrapper {
        display: flex;
        flex-direction: column;
        position: absolute;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

button {
  transition: transform .5s;
  cursor: pointer;
  width: 100%;
  border-radius: 50%;
  border: none;
  font-family: Roboto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $button-grey;

  >div {
    >#arrow {
    transition: transform .5s;
    }
  }
  

  &:hover {
    transform: scale(1.125);
  }
}
//----- Media Screen small desktop -----//@at-root
@media screen and (max-height: 720px) {
    button {
        font-size: .7em;
    }
}

</style>