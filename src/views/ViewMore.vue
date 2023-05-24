<template>
    <div>
        <v-container class="full-container pa-0 pb-3 white-bg">
            <div class="text-left">
                <v-btn class="back-btn ma-4" icon @click="backToHome" abs>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </div>
            <div class="header pa-4">
                <p v-if="type" class="type pt-3 pl-6">
                    {{ type }}
                </p>
            </div>
        </v-container>
        <v-container class="pr-0">
            <div v-if="searching">
                <div class="pr-4">
                    <div class="loading-img pl-0" :style="{
                        backgroundImage:
                            'url(' +
                            bgImage +
                            ')',
                    }"></div>
                </div>
            </div>
            <Bucket v-if="more.length" :media="more">
            </Bucket>
        </v-container>
    </div>
</template>
<script setup>
import { getCurrentInstance, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import getData from '../services/getData'
import Bucket from '../components/Bucket.vue'
import imgUrl from '../assets/searching.gif'
import functions from '../functions';

const internalInstance = getCurrentInstance();
const route = useRoute();
const router = useRouter()
var type = ref('');
var more = ref([]);
var bgImage = ref(imgUrl);
var searching = ref(false);

// functions
async function getApiData() {
    var result;
    internalInstance.appContext.config.globalProperties.$Progress.start();
    searching.value = true;

    switch (route.params.type) {
        case 'trending':
            type = 'Trending';
            result = await getData.getTrending();
            break;
        case 'currentSeason':
            type = 'Hot this season';
            result = await getData.getThisSeason();
            break;
        case 'nextSeason':
            type = 'Hot next season';
            result = await getData.getNextSeason();
            break;
        case 'mostPopular':
            type = 'Most popular';
            result = await getData.getMostPopular();
            break;
        case 'top':
            type = 'Top';
            result = await getData.getTop();
            break;
        default:
            break;
    }

    searching.value = false;
    more.value = result.data.data.Page.media;
    internalInstance.appContext.config.globalProperties.$Progress.finish();
}
function backToHome() {
    router.push({ name: 'home' });
}

getApiData();

</script>
<style>
.full-container {
    max-width: 100% !important;
}

.header {
    text-align-last: center;
    display: contents;
}

.loading-img {
    height: 356px;
    background-position-x: center;
    margin-right: auto;
    margin-left: auto;
}

.type {
    font-size: 1.8rem;
    font-weight: 500;
}

.back-btn {
    margin-top: 10px !important;
}
</style>
