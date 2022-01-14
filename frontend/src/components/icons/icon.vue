<template>
    <div class="icon" :class="[ activated ? 'activated' : 'inactive' ]" >
        <svg v-if="icon==='global'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
            <path d="M37.5,61.353A23.445,23.445,0,1,1,54.972,53.54,23.472,23.472,0,0,1,37.5,61.353Zm0-42.887a19.445,19.445,0,1,0,14.492,6.481A19.474,19.474,0,0,0,37.5,18.466Z"/>
            <polygon points="56.434 47.984 54.366 43.267 50.579 40.779 49.414 42.077 46.685 44.565 43.114 41.969 42.682 38.013 40.613 36.289 34.135 35.802 30.612 36.309 29.535 34.032 31.214 32.773 34.027 31.474 35.713 28.986 38.138 26.39 42.898 27.187 45.495 25.524 49.414 20.079 53.482 23.613 57.341 29.76 58.93 37.156 58.302 43.133 56.434 47.984"/>
            <polygon points="34.724 59.172 32.377 54.816 30.024 52.517 30.105 47.849 25.29 47.027 23.668 42.915 26.805 39.453 31.241 40.535 35.568 39.453 38.381 41.401 40.535 45.995 43.682 47.849 41.519 54.492 38.922 56.872 37.518 59.172 34.724 59.172"/>
            <polygon points="31.656 17.234 30.744 23.959 25.924 25.387 22.353 28.78 17.48 29.923 21.387 23.94 25.431 20.346 31.656 17.234"/>
        </svg>
        <svg v-if="icon==='reset'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
            <path d="M37.279,61.853A23.971,23.971,0,0,1,13.335,37.91c0-7.09,3.1-13.325,8.978-18.034l3.126,3.9c-4.713,3.78-7.1,8.535-7.1,14.134A18.944,18.944,0,1,0,37.279,18.966v-5a23.944,23.944,0,1,1,0,47.887Z"/>
            <polygon points="26.376 33.463 21.376 33.463 21.376 24.326 13.139 24.326 13.139 19.326 26.376 19.326 26.376 33.463"/>
        </svg>
        <svg v-if="icon==='info'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
            <g>
    <path d="M36.351,30.806a3.11,3.11,0,0,0,2.27-.8,3.011,3.011,0,0,0,.813-2.253,2.933,2.933,0,0,0-.8-2.219,3.181,3.181,0,0,0-2.287-.762,3.125,3.125,0,0,0-2.252.762,2.93,2.93,0,0,0-.8,2.219,2.771,2.771,0,0,0,3.049,3.048Z"/>
    <path d="M39.451,48.1a1.033,1.033,0,0,1-.085-.525V33.516H32.354l-.373,2.744,1.83.644a.649.649,0,0,1,.44.711v9.959a.9.9,0,0,1-.1.508.615.615,0,0,1-.44.17l-1.728.237v2.676h9.654V48.489l-1.727-.237Q39.534,48.218,39.451,48.1Z"/>
  </g>
  <path d="M36.809,62.216A24.245,24.245,0,1,1,61.053,37.971,24.272,24.272,0,0,1,36.809,62.216Zm0-43.49A19.245,19.245,0,1,0,56.053,37.971,19.266,19.266,0,0,0,36.809,18.726Z"/>
        </svg>
        <svg v-if="icon==='sectors'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
            <polygon points="54.53 14.278 45.241 14.278 45.241 39.048 29.759 29.759 29.759 39.048 14.278 29.759 14.278 60.722 23.567 60.722 23.567 51.433 35.952 51.433 35.952 60.722 45.241 60.722 60.722 60.722 54.53 14.278"/>
        </svg>
        <svg v-if="icon==='person'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
            <path d="M42.9,37.884a12.651,12.651,0,1,0-10.808,0A23.473,23.473,0,0,0,14.035,60.722h46.93A23.473,23.473,0,0,0,42.9,37.884Z"/>
        </svg>
        <svg class="hover" v-if="icon==='hover'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
            <g>
                <path class="ignore" d="M54.108,33.278l2.087,0V48.549l-2.088-.006.007.009c-.007-.112-.019-.223-.019-.335q0-7.29,0-14.582c0-.123.014-.245.021-.368Z" fill-rule="evenodd"/>
                <path class="ignore" d="M34.057,13.289l-.005,2.088.009-.007h-4.25l.011.008q0-1.044,0-2.088Z" fill-rule="evenodd"/>
                <path class="ignore" d="M51.948,54.865c.008.089.024.177.024.266q0,3.177,0,6.354c0,.067-.007.134-.013.226H29.845v-.39q0-3.025,0-6.052c0-.133-.015-.267-.024-.4l-.007.008h2.161V59.62H49.341V54.878H51.96Z" fill-rule="evenodd"/>
                <path class="ignore" d="M25.642,35.434H27.72V15.377h2.1l-.011-.008c.011.133.034.266.034.4q0,13.837,0,27.676v.363H27.721V37.5h-2.07V35.423Z" fill-rule="evenodd"/>
                <path class="ignore" d="M20.871,39.593H18.805v-6.28h6.837v2.121l.009-.011H20.884c0,.286,0,.52,0,.755q-.011,1.712-.02,3.424Z" fill-rule="evenodd"/>
                <path class="ignore" d="M54.107,48.543q-.006,2.957-.015,5.913v.409H51.948l.012.013V48.552h2.154Z" fill-rule="evenodd"/>
                <path class="ignore" d="M25.654,46.456h-2.62a.9.9,0,0,1-.027-.145q0-2.214,0-4.428a.758.758,0,0,1,.022-.132l-.01.006h2.624v4.71Z" fill-rule="evenodd"/>
                <path class="ignore" d="M27.736,50.7H25.654V46.456l-.012.011h2.085v4.241Z" fill-rule="evenodd"/>
                <path class="ignore" d="M29.82,54.869H27.736V50.7l-.009.01h2.119c0,1.037,0,2.052,0,3.067,0,.368-.021.735-.032,1.1Z" fill-rule="evenodd"/>
                <path class="ignore" d="M23.028,41.751H20.871V39.593l-.007.009h2.154v2.155Z" fill-rule="evenodd"/>
                <path class="ignore" d="M34.052,15.377h2.11v8.958h4.752v2.152l.012-.013h-4.77v8.917H34.061V15.37Z" fill-rule="evenodd"/>
                <path class="ignore" d="M40.914,26.487c.111-.009.221-.026.332-.026q2.817,0,5.634,0c.109,0,.217.01.36.017v2.092l.011-.01H43v6.835H40.926v-8.92Z" fill-rule="evenodd"/>
                <path class="ignore" d="M47.24,28.569h4.71v2.083l.009-.007H49.323v6.844H47.251v-8.93Z" fill-rule="evenodd"/>
                <path class="ignore" d="M51.95,30.652h2.158v2.626l.008-.011H51.959V30.645Z" fill-rule="evenodd"/>
                <path class="ignore" d="M51.959,30.645v2.622h2.157c-.007.123-.021.245-.021.368q0,7.292,0,14.582c0,.112.012.223.019.335H51.96v6.326H49.341V59.62H31.974V54.877H29.813c.011-.367.03-.734.032-1.1,0-1.015,0-2.03,0-3.067H27.727V46.467H25.642v-4.71H23.018V39.6H20.864q.009-1.711.02-3.424c0-.235,0-.469,0-.755h4.767V37.5h2.07v6.3h2.125v-.363q0-13.839,0-27.676c0-.133-.023-.266-.034-.4h4.25V35.391h2.095V26.474h4.77v8.92H43V28.559h4.247v8.93h2.072V30.645Z" fill="#fff" fill-rule="evenodd"/>
            </g>
        </svg>
        <svg v-if="icon==='hover2'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
            <path class="ignore" d="M19.715,51.47h.23a.344.344,0,0,0,.325-.222,17.2,17.2,0,0,1,1.7-3.151,19.359,19.359,0,0,1,7.5-6.628,18.552,18.552,0,0,1,7.708-1.842.317.317,0,0,1,.332.3c0,.006,0,.011,0,.017v6.478a.32.32,0,0,0,.322.32.33.33,0,0,0,.17-.05L55.143,35.4a.321.321,0,0,0,0-.532L38,23.584a.315.315,0,0,0-.492.27v6.557a.315.315,0,0,1-.3.318c-5.684.3-9.772,1.969-12.971,5.2-4.842,4.89-4.509,11.042-4.509,12.6C19.723,49.343,19.715,50.534,19.715,51.47Z"/>
        </svg>
        <svg v-if="icon==='backwards'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
            <polygon points="44.19 57.094 24.446 37.349 43.911 17.885 48.153 22.127 32.93 37.349 48.432 52.851 44.19 57.094"/>
        </svg>
        <svg v-if="icon==='forwards'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
            <polygon points="30.81 57.094 26.567 52.851 42.069 37.349 26.848 22.127 31.09 17.885 50.554 37.349 30.81 57.094"/>
        </svg>
    </div>
</template>

<script>
import resetIcon from '@/assets/icons/Icons-Shutdown_reset.svg'
import globalIcon from '@/assets/icons/Icons-Shutdown_global.svg'
import infoIcon from '@/assets/icons/Icons-Shutdown_info.svg'
import personIcon from '@/assets/icons/Icons-Shutdown_person.svg'
import sectorIcon from '@/assets/icons/Icons-Shutdown_sektoren.svg'


export default {
    name: 'flagIcon',
    data() {
        return {
            resetIcon,
            globalIcon,
            infoIcon,
            personIcon,
            sectorIcon
        }
    },
    props: {
        activated: Boolean,
        icon: String
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';

.inactive svg path:not(.ignore), .inactive svg polygon:not(.ignore)  {
    fill: $secondary;
}
.activated svg path:not(.ignore), .activated svg polygon:not(.ignore)  {
    fill: $primary;
}

.icon {
      width: 30px;
      height: 30px;
      margin: 5px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      
    & svg {
        height: 100%;
        width: 100%; 
    }
    display: flex;
    justify-content: center;
    align-items: center;

    .icon .hover path {
        fill: white !important;
    }
}





</style>