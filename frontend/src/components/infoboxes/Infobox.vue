<template>
    <transition name="slideIn">
    <div class="infobox" v-if="$store.state.app.infoboxOpen">
        <div id="close-btn" v-on:click="$store.commit('TOGGLE_INFOBOX')">
            <h1 id="headline">{{ headline }}</h1>
            <img id="icon" src="../../assets/icons/Icons-Shutdown_close.svg" />
        </div>
        <p v-html="content">{{ content }}</p>
        <div class="infoImage" :style="{backgroundImage:'url('+ require(`../../assets/imgs/${contentImg}`) + ')'}"></div>
    </div>
    </transition>
</template>

<script>
export default {
    name: 'Infobox',
    props: {
    },
    computed: {
        headline() {
            return this.$store.state.app.infoboxHeadline;
        },
        content() {
        var contentText = "";
        var allContent = [];

        allContent[0] = "The emissions transportation sector are due to fossil fuel combustion in transportation vehicles. Passenger vehicles accounted for the largest share of emissions (45%). Trucks and fossil powered rail traffic account for around 29,5%. 11.6% of the traffic emissions come from aviation and an other 10.6% from shipping. The emissions by planes are around 2.5% of the worldwide produced CO₂. <sub style='font-weight: bold'>1</sub>";
        allContent[1] = "The CO2 Emissions in energy production can be narrowed down to three main sources: natural gasses, oil and coal. These sources of high energy density have gotten their power from millions of years of compression under ground. From digging up these combustibles, humans bring the stored Carbon dioxide from underground into the atmosphere. The European debate from 2022 about making nuclear power a renewable source of energy, due to its low CO₂ emissions, was highly controversially discussed. Lower emission rates stand against the disposal issue with radioactive waste. <sub style='font-weight: bold'>2</sub>"
        allContent[2] = "The largest amount of emissions comes from livestock and manure with its even worse methane gas emissions. Among many other factors, the agricultural soils, deforestation and crop burning are as big as a problem as the cattle breeding. Reducing the amount of animal products produced would benefit the environment in many different ways. The food animals receive in such manure systems is mostly produced in Brazil, where slash and burn is a common method to create faming space. Nitrous oxide and methane are mainly from the decomposition of animal manures under low oxygen conditions, often occurring when large numbers of animals are held on low space. <sub style='font-weight: bold'>3</sub>"
        allContent[3] = "The CO2 emissions, reported by every single country, give an insight in how much each country is emitting. An export adjusted view on the data otherwise gives an insight in which of these countrys have outsourced their production to other countries, where these emissions are made then. <sub style='font-weight: bold'>5</sub>"
        allContent[4] = "Apart from energy production, agriculture and traffic there are many other sectors emitting greenhouse gasses in small numbers. Among these sectors industrial processes and waste management are the biggest sub-sectors. Waste only contributes 2.5% of the global greenhouse gasses. What sounds like a small number is caused by accounting rules made by the IPCC. Material and energy recovery are not included in this statistic because they are already included in other sectors such as transportation. <sub style='font-weight: bold'>4</sub>"

        if (this.headline == "Traffic") {
            contentText = allContent[0];
        } else if (this.headline == "Energy") {
            contentText = allContent[1];
        } else if (this.headline == "Agriculture") {
            contentText = allContent[2];
        } else if (this.headline == "Export") {
            contentText = allContent[3];
        } else if (this.headline == "Others") {
            contentText = allContent[4];
        }
        return contentText;
        },
        contentImg() {
            var contentImage = "";
            if (this.headline == "Traffic") {
                contentImage = "traffic_image.jpg"
            } else if (this.headline == "Energy") {
                contentImage = "energy_image.jpg"
            } else if (this.headline == "Agriculture" || this.headline == "Agr.") {
                contentImage = "agriculture_image.jpg"
            } else if (this.headline == "Export") {
                contentImage = "export_image.jpg"
            } else if (this.headline == "Others") {
                contentImage = "garbage_image.jpg"
            }
            console.log(contentImage);
            console.log(this.headline);
            return contentImage;
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';

.infobox {
    position: absolute;
    width: 30%;
    height: 100vh;
    right: 0;
    padding: 30px 60px;
    background: $primary;
    user-select: none;
    font-size: 1.2rem;
    color: white;
    line-height: 24px;
}

.slideIn {
    &-enter, &-leave-to {
        //opacity: 0;
        transform: translateX(100%);
    }
    &-enter-active, &-leave-active {
        transition: all .3s;
    }
}

#close-btn {
    text-align: right;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    & #icon {
        cursor: pointer;
        width: 50px;
        right: 50px;
        position: absolute;
        transition: transform .7s ease-in-out;
    } 
    & #icon:hover {
        transform: rotate(180deg);
    }
}

.infoImage {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
}

//----- Media Screen small desktop -----//@at-root
@media screen and (max-height: 720px) {
  .infobox p {
    font-size: 17px;
    line-height: 19px
  }
}
</style>
