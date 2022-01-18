<template>
  <div>
    <input :class="(disabled) ? 'disabled' : '' " :disabled="disabled" class="shutdown-switch" :id="[ small ? 'small' : 'large' ]" type="checkbox" v-model="buttonStatus" @change="emitStatus">
  </div>
</template>

<script>
export default {
  name: 'shutdownCheckbox',
  props: {
    status: Boolean,
    small: Boolean,
    disabled: Boolean
  },
  mounted() {
    this.buttonStatus = this.status;
  },
  data() {
    return {
      buttonStatus: false,
    }
  },
  methods: {
    emitStatus() {
      this.$emit('status', this.buttonStatus)
    }
  },
  watch: {
    status: function () {
      this.buttonStatus = this.status;
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';

  input.shutdown-switch {
      cursor: pointer;
      position: relative;
      appearance: none; outline: none;
      width: 50px; height: 27px;
      border-radius: 50px; box-shadow: inset -20px 0 0 0 #ffffff;
      transition-duration: 500ms;
      border: 5px $secondary solid ;
      margin: 5px 0;
  }

  input.shutdown-switch:after {
      transition: .5s;
      content: "";
      position: absolute;
      top: -6px; left: -6px;
      width: 18px; height: 18px;
      background-color: $background;
      border: 5px $primary solid;
      border-radius: 50%; 
  }

  input.shutdown-switch:checked {
      border-color: $secondary;
      transition: transform .5s;

    &:after {
      background: $color;
    }
  }

  input.shutdown-switch:checked:after{
      transition: .5s;
  }

  input.shutdown-switch:checked:after {
      left: 18px;
  }
  input.shutdown-switch:not(.disabled):hover:after {
    transform: scale(1.2);
  }

  //------ small ------//

  input.shutdown-switch#small {
      width: 40px; height: 21px;
      border-radius: 26px; box-shadow: inset -13px 0 0 0 #ffffff;
      border: 4px $secondary solid ;
      margin: 3.5px 0;
  }

  input.shutdown-switch#small:after {
      top: -4px; left: -4px;
      width: 13px; height: 13px;
      border: 4px $primary solid;
  }
  input.shutdown-switch#small:checked:after {
      left: 14.5px;
  }

</style>
