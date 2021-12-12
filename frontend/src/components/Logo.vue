<template>
  <div class="logoIcon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226.17 35.95">
        <g id="Ebene_2" data-name="Ebene 2">
            <g id="Logo">
                <path class="cls-1" d="M14.81,28.58a2.14,2.14,0,0,0-1.21-1.93,13.82,13.82,0,0,0-3.9-1.26Q.79,23.52.79,17.81a6.86,6.86,0,0,1,2.76-5.55A11.1,11.1,0,0,1,10.77,10a11.94,11.94,0,0,1,7.61,2.24,7.05,7.05,0,0,1,2.85,5.82H14.56a3.24,3.24,0,0,0-.93-2.37,3.92,3.92,0,0,0-2.89-.93,4,4,0,0,0-2.61.76,2.42,2.42,0,0,0-.92,1.94,2.05,2.05,0,0,0,1,1.79,10.61,10.61,0,0,0,3.55,1.18A28.35,28.35,0,0,1,16,21.58q5.29,1.94,5.29,6.72a6.54,6.54,0,0,1-2.93,5.54A12.66,12.66,0,0,1,10.79,36a13.14,13.14,0,0,1-5.58-1.12,9.32,9.32,0,0,1-3.82-3.07A7.11,7.11,0,0,1,0,27.54H6.33a3.47,3.47,0,0,0,1.32,2.73,5.22,5.22,0,0,0,3.28.94,4.88,4.88,0,0,0,2.9-.72A2.28,2.28,0,0,0,14.81,28.58Z"/>
                <path class="cls-1" d="M32.11,13.22A8.34,8.34,0,0,1,38.79,10q8.13,0,8.25,9.45v16H40.36V19.66a4.7,4.7,0,0,0-.92-3.18,4,4,0,0,0-3.07-1,4.55,4.55,0,0,0-4.26,2.26V35.49H25.44V0h6.67Z"/>
                <path class="cls-1" d="M67.05,33a8.38,8.38,0,0,1-6.84,3,7.91,7.91,0,0,1-6.14-2.31q-2.1-2.31-2.16-6.77V10.49h6.68V26.66c0,2.6,1.19,3.91,3.56,3.91s3.82-.79,4.67-2.36V10.49h6.7v25H67.23Z"/>
                <path class="cls-1" d="M86.55,4.34v6.15h4.27v4.9H86.55V27.86a3,3,0,0,0,.53,2,2.66,2.66,0,0,0,2,.6,10.54,10.54,0,0,0,2-.16v5.06a13.79,13.79,0,0,1-4,.6q-7,0-7.16-7.09V15.39H76.22v-4.9h3.65V4.34Z"/>
                <path class="cls-1" d="M93.5,22.8c0-3.89.88-7,2.62-9.31A8.51,8.51,0,0,1,103.3,10a7.68,7.68,0,0,1,6,2.72V0H116V35.49h-6l-.33-2.66A7.84,7.84,0,0,1,103.25,36a8.48,8.48,0,0,1-7.08-3.48Q93.5,29,93.5,22.8Zm6.68.5a9.91,9.91,0,0,0,1.22,5.39A4,4,0,0,0,105,30.57,4.47,4.47,0,0,0,109.33,28V18.07A4.4,4.4,0,0,0,105,15.46Q100.18,15.46,100.18,23.3Z"/>     
                <path class="cls-1" d="M191.7,26.41,195,10.49h6.44l-6.37,25h-5.59l-4.74-15.74L180,35.49h-5.56l-6.38-25h6.45l3.25,15.9,4.58-15.9h4.83Z"/>
                <path class="cls-1" d="M210.87,10.49l.21,2.89A8.71,8.71,0,0,1,218.27,10c2.65,0,4.62.77,5.91,2.33s2,3.88,2,7V35.49h-6.68v-16a4.33,4.33,0,0,0-.92-3.08,4.15,4.15,0,0,0-3.08-1,4.59,4.59,0,0,0-4.22,2.4V35.49h-6.68v-25Z"/>
            </g>
        </g>
    </svg>
    <input class="apple-switch" type="checkbox" :checked="chekced" :id="[ dark ? 'dark' : 'light']">
  </div>
</template>

<script>
export default {
  name: 'Switch',
  props: {
    checked: Boolean,
    dark: Boolean
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';

  .logoIcon {
      width: 100%;
  }
  input.apple-switch {
      cursor: pointer;
      position: absolute;
      appearance: none; outline: none;
      width: 54px; height: 30px;
      border-radius: 50px; box-shadow: inset -20px 0 0 0 #ffffff;
      transition-duration: 500ms;
      border: 6px $secondary solid ;
      margin-left: 60%;
      margin-top: 10px;
  }
  input.apple-switch:after {
      transition: background .5s;
      content: "";
      position: absolute;
      top: -6px; left: -6px;
      width: 18px; height: 18px;
      background-color: white;
      border: 6px $primary solid;
      border-radius: 50%; 
      transition: 0.1s;
  }
  input.apple-switch:checked {
      border-color: $secondary;

    &:after {
      background: $color;
    }
  }
  input.apple-switch:checked:after {
      left: 20px;
      transition: 0.1s;
  }
  input.apple-switch:hover:after {
    width: 20px; height: 20px;
    margin: -2px 0 0 -2px;
    border: 7px $primary solid;
  }
  input.apple-switch:checked:hover:after {
    width: 22px; height: 22px;
    margin: -3px 0 0 -3px;
  }
  svg>g>g>path {
      fill: $secondary;
  }

</style>
