
<template>
  <div class="icon-wrapper" @click="toggleTab(tab)" :class="($store.state.app.activeTab===tab)?'active':''">
    <span style="text-transform: capitalize;">{{tab}}</span>
    <icon :activated="($store.state.app.activeTab===tab)?true:false" :icon="getIcon" />
  </div>
</template>

<script>
import icon from '@/components/icons/icon.vue'

export default {
  name: 'TabContainer',
  components: {
    icon
  },
  props: {
      tab: String 
  },
  methods: {
    toggleTab() {
      this.$store.commit('CHANGE_ACTIVE_TAB', this.tab)
    },
  },
  computed: {
    getIcon() {
      const icon = this.tab;
      switch (icon) {
        case "Per Country":
          return "global"
        case "Per Sector":
          return "sectors"
        case "Per person":
          return "person"
        default:
          return "none"
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';
.icon-wrapper {
    margin: 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    span {
        font-family: Roboto;
        font-size: 1.2em;
        &:hover {
        font-weight: bold;
      }
    }
    
    &.active {
      span {
        font-weight: bold;
      }
    }
  }
</style>
