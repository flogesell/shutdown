<template>
    <div class="icon" :class="[ activated ? 'activated' : 'inactive' ]" >
        <svg v-if="icon==='global'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280" width="25" height="25">
            <path d="M237.822,163.4l.01-.091a96.636,96.636,0,0,0,2.876-23.4c0-1.093-.04-2.177-.076-3.262l.013-.127-.018-.084a95.993,95.993,0,0,0-7.1-33.052l-.028-.129-.077-.122A96.533,96.533,0,0,0,117.948,47.092l.025-.184-.843.422A96.457,96.457,0,1,0,229.407,185.194l.01.023.058-.152a95.707,95.707,0,0,0,8.3-21.551Zm-26.9,36.14a89.578,89.578,0,0,1-62.755,29.725l2.485-4.07,11.679-10.706,9.732-29.877-14.159-8.338-9.685-20.664-12.652-8.759-19.464,4.866-19.951-4.866L82.042,162.418l7.3,18.492,21.654,3.7-.365,21,10.583,10.34,6.377,11.834a89.421,89.421,0,0,1-64.847-124.69l13.387-4.25,16.06-15.258,21.682-6.424,3.037-22.4a89.258,89.258,0,0,1,76.828,10.655L180.216,84.2l-11.679,7.482-21.411-3.589L136.22,99.768l-7.585,11.192L115.983,116.8l-7.549,5.662,4.843,10.244,15.845-2.281,29.135,2.19,9.307,7.753,1.946,17.794,16.058,11.678,12.275-11.192,5.243-5.839L220.117,164l5.613,12.806A89.244,89.244,0,0,1,210.924,199.536Z"/>
        </svg>
        <svg v-if="icon==='reset'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
            <path d="M140,43.549V50.3A89.7,89.7,0,1,1,50.3,140c0-24.019,9.7-45.47,28.148-62.448V105.1h6.755V66.818H46.927v6.755H72.813C53.634,91.691,43.549,114.484,43.549,140A96.451,96.451,0,1,0,140,43.549Z"/>
        </svg>
        <svg v-if="icon==='info2'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
            <path d="M140,43.5A96.5,96.5,0,1,0,236.5,140,96.5,96.5,0,0,0,140,43.5ZM128.926,83.51q3.408-3.264,9.651-3.265,6.384,0,9.8,3.265t3.411,9.508q0,6.242-3.483,9.651t-9.725,3.41q-6.242,0-9.651-3.41t-3.411-9.651Q125.515,86.778,128.926,83.51Zm32.293,109.8H119.854V181.841l7.4-1.016a2.639,2.639,0,0,0,1.887-.726,3.846,3.846,0,0,0,.436-2.176V135.252q0-2.466-1.887-3.048l-7.838-2.757,1.6-11.756H151.5v60.232a4.453,4.453,0,0,0,.362,2.249q.362.51,1.959.653l7.4,1.016Z"/>
        </svg>
        <svg v-if="icon==='info'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
            <g>
                <path d="M140,40A100,100,0,1,0,240,140,100.112,100.112,0,0,0,140,40Zm0,193a93,93,0,1,1,93-93A93.1,93.1,0,0,1,140,233Z"/>
                <path d="M138.577,106.079q6.238,0,9.725-3.41t3.483-9.652q0-6.238-3.411-9.507t-9.8-3.265q-6.242,0-9.651,3.265t-3.411,9.507q0,6.243,3.411,9.652T138.577,106.079Z"/>
                <path d="M151.857,180.171a4.439,4.439,0,0,1-.362-2.249V117.691H121.451l-1.6,11.756,7.838,2.757q1.884.582,1.887,3.047v42.671a3.848,3.848,0,0,1-.436,2.177,2.646,2.646,0,0,1-1.887.726l-7.4,1.016v11.466h41.365V181.841l-7.4-1.016Q152.217,180.681,151.857,180.171Z"/>
            </g>
        </svg>
        <svg v-if="icon==='sectors'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
            <polygon points="210.801 43.453 172.182 43.453 172.182 146.437 107.818 107.818 107.818 146.437 43.453 107.818 43.453 236.547 82.072 236.547 82.072 197.928 133.563 197.928 133.563 236.547 172.182 236.547 236.547 236.547 210.801 43.453"/>
        </svg>
        <svg v-if="icon==='person'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
            <path d="M162.234,142.577a52.053,52.053,0,1,0-44.468,0,96.582,96.582,0,0,0-74.313,93.97H236.547A96.582,96.582,0,0,0,162.234,142.577Z"/>
        </svg>
    </div>
</template>

<script>
import resetIcon from '@/assets/icons/Icons-Shutdown_reset.svg'
import globalIcon from '@/assets/icons/Icons-Shutdown_global.svg'
import infoIcon1 from '@/assets/icons/Icons-Shutdown_info1.svg'
import infoIcon2 from '@/assets/icons/Icons-Shutdown_info2.svg'
import personIcon from '@/assets/icons/Icons-Shutdown_person.svg'
import sectorIcon from '@/assets/icons/Icons-Shutdown_sektoren.svg'


export default {
    name: 'flagIcon',
    data() {
        return {
            resetIcon,
            globalIcon,
            infoIcon1,
            infoIcon2,
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
.activated svg path, .activated svg polygon  {
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
}





</style>