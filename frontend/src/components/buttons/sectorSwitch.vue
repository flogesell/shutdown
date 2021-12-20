
<template>
  <div class="sector-switch">
      <checkbox :status="status" @status="toggle" />
        <p>{{ name }}</p>
        <InformationIcon class="sector-info" :activated=false :small=true />
    </div>
</template>

<script>
import checkbox from '@/components/buttons/shutdownCheckbox.vue'
import InformationIcon from '@/components/icons/informationIcon.vue'

export default {
  name: 'sectorSwitch',
  components: {
    checkbox,
    InformationIcon
  },
  props: {
      name: String,
      status: Boolean
  },
  methods: {
    toggle(e) {
      this.$store.commit('CHANGE_SECTOR_STATE', { name: this.name, status: e })
      //this.traffic = e;
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';
.sector-switch {
    display: flex;
    width: 100%;
    align-items: center;
    p {
        margin-left: 20px;
    }
}

.sector-info {
    position: inherit;
    margin-left: 5px;
    width: 10%;
    display: flex;
}
</style>
