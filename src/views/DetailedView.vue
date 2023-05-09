<template>
    <div v-if="details">
        <v-container class="header-wrapper pa-0">
            <div class="banner">
                <v-img :class="{ 'no-image': details.bannerImage === null }" :src="details.bannerImage">
                    <div class="card-shadow"></div>
                </v-img>
            </div>
        </v-container>
        <v-container class="white-bg">
            <div class="header">
                <div class="d-flex flex-row">
                    <v-img class="thumbnail" :src="details.coverImage.large"></v-img>
                </div>
                <p class="card-title text-left pt-4">
                    {{ title }}
                </p>
                <v-tabs v-model="tab" slider-color="rgb(237, 241, 245)" selected-class="selected-filter">
                    <v-tab size="small" value="Overview">Item One</v-tab>
                    <v-tab size="small" value="Characters">Item Two</v-tab>
                    <v-tab size="small" value="Staff">Item Three</v-tab>
                    <v-tab size="small" value="Stats">Item Three</v-tab>
                    <v-tab size="small" value="Social">Item Three</v-tab>
                </v-tabs>
            </div>
        </v-container>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import getData from '../services/getData'

const route = useRoute();
var details = ref(null);
var tab = ref(null);

// Computed Props
const title = computed(() => details.value.title.english || details.value.title.userPreferred)

// Functions
async function getDetails() {
    var data = await getData.getDetails(route.params.id);
    details.value = data.data.data.Media;
    console.log(data.data.data.Media);
}

getDetails();
</script>
<style>
.header-wrapper {
    max-width: 100%;
}

.banner {
    height: 210px;
}

.no-image {
    background-color: rgb(39, 44, 56);
    height: 130px;
}

.thumbnail {
    max-width: 100px;
    min-width: 100px;
    background-color: rgba(212, 230, 245, .5);
    border-radius: 5px;
    box-shadow: 0 0 29px rgba(49, 54, 68, .25);
    margin-top: -105px;
}

.card-title {
    font-size: 1.1rem;
    font-weight: 500;
}

.card-shadow {
    background: linear-gradient(180deg, rgba(6, 13, 34, 0) 40%, rgba(6, 13, 34, .6));
    height: 100%;
    width: 100%;
}

.selected-filter {
    color: rgb(61, 180, 242);
}

.v-tabs {
    margin-top: 15px;
}

.v-slide-group__next,
.v-slide-group__prev {
    min-width: 0px !important;
}
</style>