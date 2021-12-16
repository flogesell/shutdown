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
      width: 140px;
      height: 140px;
      border-radius: 50%;
      border: none;

      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba($color: $primary, $alpha: .085);

      >div{
        transform: translateY(.24em);
      }

      &:hover{
        transform: scale(1.125);
      }
    }

</style>