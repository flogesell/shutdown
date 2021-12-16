<template>
  <div>
    <input class="apple-switch" type="checkbox" checked>
  </div>
</template>

<script>
export default {
  name: 'Switch',
  props: {
    checked: Boolean
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';

  input.apple-switch {
      cursor: pointer;
      position: relative;
      appearance: none; outline: none;
      width: 60px; height: 32px;
      border-radius: 60px; box-shadow: inset -20px 0 0 0 #ffffff;
      transition-duration: 500ms;
      border: 6px $secondary solid ;
      margin: 5px 0;
  }

  input.apple-switch:after {
      transition: .5s;
      content: "";
      position: absolute;
      top: -6px; left: -6px;
      width: 20px; height: 20px;
      background-color: $background;
      border: 6px $primary solid;
      border-radius: 50%; 
  }

  input.apple-switch:checked {
      border-color: $secondary;
      transition: transform .5s;

    &:after {
      background: $color;
    }
  }

  input.apple-switch:checked:after{
      transition: .5s;
  }

  input.apple-switch:checked:after {
      left: 22px;
  }
  input.apple-switch:hover:after {
    transform: scale(1.2);
  }

</style>
