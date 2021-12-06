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
        position: relative;
        appearance: none; outline: none;
        width: 54px; height: 30px;
        border-radius: 50px; box-shadow: inset -20px 0 0 0 #ffffff;
        transition-duration: 500ms;
        border: 4px $secondary solid;
    }
    input.apple-switch:after {
        transition: background .5s;
        content: "";
        position: absolute;
        top: -4px; left: -4px;
        width: 22px; height: 22px;
        background-color: transparent;
        border: 4px $primary solid;
        border-radius: 50%; 
    }
    input.apple-switch:checked {
        border-color: $primary;

      &:after {
        background: $color;
      }
    }
    input.apple-switch:checked:after {
        left: 20px;
    }

</style>
