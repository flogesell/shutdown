<template>
  <div class="circle2">
      <p>{{ data[state].heating }}°</p>
  </div>
</template>

<script>
export default {
props: {
    data: {
        type: Array,
    },
    state: {
        type: Number,
    },
}
}
</script>

<style scoped>
    .circle2{
        border-radius: 50%;
        width: 240px;
        height: 240px;
        background-color:rgba(255, 220, 124, 1);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 100px;
    }

    p{
        font-size: 90px;
        margin-left: 25px;
        font-weight: 700;
    }
</style>