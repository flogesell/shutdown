<template>
  <button v-on:click="shootArrow" v-on:mouseover="prepArrow">
      <div>
        <h3 v-html="text"></h3>
        <h2 id="arrow">{{ (backwards ? '&larr;' : '&rarr;') }}</h2>
      </div>
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
      var arrow = document.getElementById('arrow');
      console.log(arrow);
      arrow.style.transform = 'translateX(10%)';
      setTimeout(() => {  
        arrow.style.transform = 'translateX(0)'; 
      }, 500);
    },
    prepArrow() {
      var arrow = document.getElementById('arrow');
      console.log(arrow);
      arrow.style.transform = 'translateX(-10%)';
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_config.scss';

button {
  transition: transform .5s;
  cursor: pointer;
  width: 100%;
  height: 0;
  padding-bottom: 100%;

  border-radius: 50%;
  border: none;
  font-family: Roboto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $button-grey;

  >div {
    padding-top: 100%;
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