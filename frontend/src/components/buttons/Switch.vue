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
      width: 54px; height: 30px;
      border-radius: 50px; box-shadow: inset -20px 0 0 0 #ffffff;
      transition-duration: 500ms;
      border: 6px $secondary solid ;
  }
  input.apple-switch:after {
      transition: background .5s;
      content: "";
      position: absolute;
      top: -6px; left: -6px;
      width: 18px; height: 18px;
      background-color: transparent;
      border: 6px $primary solid;
      border-radius: 50%; 
      transition: 0.1s;
  }
  input.apple-switch:checked {
      border-color: $secondary;

    &:after {
      background: $color;
    }
  }
  input.apple-switch:checked:after {
      left: 20px;
      transition: 0.1s;
  }
  input.apple-switch:hover:after {
    width: 20px; height: 20px;
    margin: -2px 0 0 -2px;
    border: 7px $primary solid;
  }
  input.apple-switch:checked:hover:after {
    width: 22px; height: 22px;
    margin: -3px 0 0 -3px;
  }

</style>
