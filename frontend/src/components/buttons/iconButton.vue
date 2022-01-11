
<template>
  <div class="icon-wrapper" @click="$emit(action)">
    <span style="text-transform: capitalize;">{{action}}</span>
    <icon :activated="activated" :icon="icon" />
  </div>
</template>

<script>
import icon from '@/components/icons/icon.vue'

export default {
  name: 'iconButton',
  components: {
    icon
  },
  props: {
    icon: String,
    action: String,
    activated: Boolean
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';
.icon-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    span {
        font-family: Roboto;
        font-size: 1.4em;
    }
  }
</style>
