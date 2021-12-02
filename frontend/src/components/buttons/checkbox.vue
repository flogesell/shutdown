<template>
  <div class="hello">
      <input class="apple-switch" type="checkbox">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
    input.apple-switch {
        position: relative;
        appearance: none; outline: none;
        width: 50px; height: 30px;
        background-color: #ffffff; border: 1px solid #D9DADC;
        border-radius: 50px; box-shadow: inset -20px 0 0 0 #ffffff;
        transition-duration: 200ms;
    }
    input.apple-switch:after {
        content: "";
        position: absolute;
        top: 1px; left: 1px;
        width: 26px; height: 26px;
        background-color: transparent;
        border-radius: 50%; box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
    }
    input.apple-switch:checked {
        border-color: #4ED164;
        box-shadow: inset 20px 0 0 0 #4ED164;
    }
    input.apple-switch:checked:after {
        left: 20px;
        box-shadow: -2px 4px 3px rgba(0,0,0,0.05);
    }

</style>
