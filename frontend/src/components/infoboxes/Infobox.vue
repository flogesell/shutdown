<template>
    <transition name="slideIn">
    <div class="infobox" v-if="open">
        <div id="close-btn" v-on:click="$emit('toggleInfobox')">
            <CloseButton />
        </div>
        <h1 id="headline">{{ headline }}</h1>
        <p v-html="content">{{ content }}</p>
    </div>
    </transition>
</template>

<script>
import CloseButton from '@/components/icons/crossIcon.vue'

export default {
    name: 'Infobox',
    props: {
        open: Boolean,
        headline: String,
    },
    components: {
        CloseButton,
    },
    computed: {
        content() {
        var contentText = "";
        var allContent = [];

        allContent[0] = "The emissions transportation sector are due to fossil fuel combustion in transportation vehicles. Passenger vehicles accounted for the largest share of emissions (45%). Trucks and fossil powered rail traffic account for around 29,5%. 11.6% of the traffic emissions come from aviation and an other 10.6% from shipping. The emissions by planes are around 2.5% of the worldwide produced CO2. <sub style='font-weight: bold'>1</sub>";
        allContent[1] = "The CO2 Emissions in energy production can be narrowed down to three main sources: natural gasses, oil and coal. These sources of high energy density have gotten their power from millions of years of compression under ground. From digging up these combustibles, humans bring the stored Carbon dioxide from underground into the atmosphere. The European debate from 2022 about making nuclear power a renewable source of energy, due to its low CO2 emissions, was highly controversially discussed. Lower emission rates stand against the disposal issue with radioactive waste. <sub style='font-weight: bold'>2</sub>"
        allContent[2] = "Due to performance enhancement, emissions per animal are increasing. For example there was often an increase of the overall emissions of dairy cows despite decreasing numbers of dairy cows. This is caused by the continuous increase of milk yield. However, from a product-related point of view, the increasing milk yield leads to a decrease of emissions per kg milk. This is due to the fact that the energy requirements for maintenance of a dairy cow are independent of milk yield and hence do not increase along with increasing milk yield. <sub style='font-weight: bold'>3</sub>"
        allContent[3] = "The CO2 emissions, reported by every single country, give an insight in how much the country is emitting. An export adjusted view on the data otherwise gives an insight in which of these countrys have outsourced their production to other countries, where these emissions are made then. <sub style='font-weight: bold'>5</sub>"
        allContent[4] = "A large number of emissions can not be traced back to speciffic sectors. Those emissions are put together in this catefory. <sub style='font-weight: bold'>4</sub>"

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
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_config.scss';

.infobox {
    position: absolute;
    width: 25%;
    height: 120vh;
    right: 0;
    top: -10vh;
    padding: calc(10vh + 30px) 30px;

    background: #F2F2F2;
    filter: drop-shadow(-2px 0 10px #000);
    font-size: 18px;
}
.infobox #headline {
    margin-bottom: 15px;
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
}
</style>
