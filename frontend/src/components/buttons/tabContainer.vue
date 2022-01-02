
<template>
  <div class="icon-wrapper" @click="toggleTab(tab)" :class="($store.state.app.activeTab===tab)?'active':''">
    <span style="text-transform: capitalize;">{{tab}}</span>
    <icon :activated="($store.state.app.activeTab===tab)?true:false" :icon="tab" />
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
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';
.icon-wrapper {
  margin: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    span {
        font-family: Roboto;
        font-size: 1.4em;
    }
    
    &.active {
      span {
        font-weight: bold;
      }
    }
  }
</style>
