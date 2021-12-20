<template>
  <button>
      <div>
        <h3> {{ text }}</h3>
        <br>
        <h2>{{ (backwards ? '&larr;' : '&rarr;') }}</h2>
      </div>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    backwards: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_config.scss';

    button{
      transition: transform .5s;
      cursor: pointer;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: none;
      font-family: Roboto;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $button-grey;

      >div{
        transform: translateY(.24em);
      }

      &:hover{
        transform: scale(1.125);
      }
    }

</style>