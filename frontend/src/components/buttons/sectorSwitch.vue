
<template>
  <div class="sector-switch" :class="name.toLowerCase()">
      <Checkbox v-if="smallSwitch > 720" :status="status" :small="false" @status="toggle" />
      <Checkbox v-if="smallSwitch <= 720" :status="status" :small="true" @status="toggle" />
      <div class="sector-btn" v-on:click="$emit('toggleInfobox'); $emit('makeInfoboxHeadline')">
        <p>{{ name }}</p>
        <Icon class="sector-info" icon="info" :activated="true" />
      </div>
    </div>
</template>

<script>
import Checkbox from '@/components/buttons/shutdownCheckbox.vue'
import Icon from '@/components/icons/icon.vue'

export default {
  name: 'sectorSwitch',
  components: {
    Checkbox,
    Icon
  },
  props: {
      name: String,
      status: Boolean
  },
  data() {
    return {
      isSmall: false,
    }
  },
  methods: {
    toggle(e) {
      this.$store.commit('CHANGE_SECTOR_STATE', { name: this.name, status: e })
      //this.traffic = e;
    }
  },
  computed: {
    smallSwitch() {
      const height = window.innerHeight;
      return height;
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';
.sector-switch {
    display: flex;
    width: 100%;
    align-items: center;
}
.sector-btn {
    width: 100%; 
    display: flex;
    align-items: center;
    p {
      user-select: none;
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
