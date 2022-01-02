<template>
    <transition name="slideIn">
    <div class="infobox" v-if="open">
        <div id="close-btn" v-on:click="$emit('toggleInfobox')">
            <CloseButton />
        </div>
        <h1 id="headline">{{ headline }}</h1>
        <p>{{ content }}</p>
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

        allContent[0] = "Around 888 million tonnes of carbon dioxide were emitted in the EU in 2018 from the road transport fuel combustion. Passenger cars and motorcycles accounted for the largest share of emissions (62%). Heavy duty trucks and buses accounted for 26% and light duty trucks for a further 13%.";
        allContent[1] = "Energy-related greenhouse gas emissions account for the majority of all anthropogenic emissions – about 80% in the USA and the European Union, for example. Just 20% of final energy consumption is in the form of electricity, but the generation of electricity is responsible for over 40% of all energy-related emissions."
        allContent[2] = "Due to performance enhancement, emissions per animal are increasing. For example there was often an increase of the overall emissions of dairy cows despite decreasing numbers of dairy cows. This is caused by the continuous increase of milk yield. However, from a product-related point of view, the increasing milk yield leads to a decrease of emissions per kg milk. This is due to the fact that the energy requirements for maintenance of a dairy cow are independent of milk yield and hence do not increase along with increasing milk yield."
        allContent[3] = "The CO2 emissions, reported by every single country, give an insight in how much the country is emitting. An export adjusted view on the data otherwise gives an insight in which of these countrys have outsourced their production to other countries, where these emissions are made then."
        allContent[4] = "A large number of emissions can not be traced back to speciffic sectors. Those emissions are put together in this catefory."

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
    padding: calc(10vh + 50px) 50px;

    background: #F2F2F2;
    border-left: 5px solid #FFDC7C;
    filter: drop-shadow(-2px 0 10px #000);
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
