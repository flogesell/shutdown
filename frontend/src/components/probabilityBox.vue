<template>
    <div class="probability-box" id="einHalbGrad-box">
        <div class="circle">
        <p>{{ number }}</p>
        </div>
        <div :style="{ transform: 'rotate('+ arcStart + 'deg)' }" class="arc arc_start"></div>
        <div :style="{ transform: 'rotate('+ arcEnd + 'deg)' }" class="arc arc_end"></div>
    </div>
</template>

<script>
export default {
    name: 'probabilityBox',
    props: {
        number: String,
        arcStart: String,
        arcEnd: String,
    },
}
</script>

<style scoped lang="scss">
#probability-container {
  position: absolute;
  bottom: 0;
}
.probability-box {
  width: 100px;
  height: 100px;
  margin: 20px;
  p {
    margin-top: 37px;
    font-size: 20px;
    font-weight: bold;
  }
}
.circle {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;  
  border: 3px solid lightgrey;
}
.arc {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 3px solid;
}

.arc_start {
  border-color: transparent grey gray gray;
}

.arc_end {
  border-color: gray gray gray transparent;
}
</style>
