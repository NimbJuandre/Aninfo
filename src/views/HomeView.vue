<template>
    <div>
        <v-container class="pa-0">
            <div class="d-flex flex-row">
                <div class="text-left header-text">
                    <div class="">Browse</div>
                </div>
                <div class="mt-5">
                    <v-select class="search-type" v-model="select.id" :items="searchTypes" item-title="name"
                        item-value="id"></v-select>
                </div>
            </div>
        </v-container>
        <v-container class="pa-0">
            <v-card class="search-card" flat>
                <v-container class="search-container" fluid grid-list-lg>
                    <v-layout class="search-wrapper" row wrap>
                        <v-text-field class="searchbar shadow" bg-color="rgb(251,251,251)" color="grey" variant="solo"
                            density="compact" v-model="searchString" label="Search" single-line clearable
                            @click:clear="getApiData" prepend-inner-icon="mdi-magnify" hide-details></v-text-field>
                    </v-layout>
                </v-container>
            </v-card>
        </v-container>
        <v-container class="pr-0">
            <!-- <div v-if="loading">
                <v-responsive class="mx-auto">
                    <v-responsive class="ma-3" height="125" v-for="index in 5" :key="index">
                        <v-skeleton-loader ref="skeleton" :boilerplate="false" type="image" :tile=true
                            class="mx-auto"></v-skeleton-loader>
                    </v-responsive>
                </v-responsive>
            </div> -->
            <div>
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

                <Bucket v-if="searched.length" :media="searched" :name="''" :viewMoreLink="''">
                </Bucket>
                <Bucket v-if="trending.length" :media="trending" :name="'TRENDING'" :viewMoreLink="'trending'">
                </Bucket>
                <Bucket v-if="currentSeason.length" :media="currentSeason" :name="'HOT THIS SEASON'"
                    :viewMoreLink="'currentSeason'">
                </Bucket>
                <Bucket v-if="nextSeason.length" :media="nextSeason" :name="'COMMING NEXT SEASON'"
                    :viewMoreLink="'nextSeason'">
                </Bucket>
                <Bucket v-if="mostPopular.length" :media="mostPopular" :name="'ALL TIME POPULAR'"
                    :viewMoreLink="'mostPopular'">
                </Bucket>
                <Bucket v-if="top.length" :media="top" :name="'Top'" :viewMoreLink="'top'">
                </Bucket>
            </div>
        </v-container>
    </div>
</template>
<script setup>
import { getCurrentInstance, ref, reactive, watch } from 'vue'
import getData from '../services/getData'
import Bucket from '../components/Bucket.vue'
import { useStore } from 'vuex'
import functions from '../functions';
import imgUrl from '../assets/searching.gif'

const internalInstance = getCurrentInstance();

const store = useStore();
var searched = ref([]);
var currentSeason = ref([]);
var nextSeason = ref([]);
var trending = ref([]);
var mostPopular = ref([]);
var top = ref([]);

var bgImage = ref(imgUrl);
var searchString = ref("");
var searching = ref(false);
const select = reactive({ id: store.getters.type });
const searchTypes = reactive([
    { id: 1, name: "Anime", },
    { id: 2, name: "Manga", },
]);

// Watches
watch(select, (newValue) => {
    store.commit('setType', newValue.id);

    if (searchString.value)
        search();
    else
        getApiData();
});
watch(searchString, functions.debounce(function (newVal) {
    if (newVal)
        search();
    else
        getApiData();
}, 350)
);

// functions
async function getApiData() {
    internalInstance.appContext.config.globalProperties.$Progress.start();
    searching.value = true;

    resetBuckets();

    var result = await getData.getHomePageSections();
    var data = result.data.data;

    searching.value = false;
    trending.value = data.trending.media;
    mostPopular.value = data.popular.media;
    top.value = data.top.media

    if (store.getters.type === 1) {
        currentSeason.value = data.season.media;
        nextSeason.value = data.nextSeason.media;
    }

    internalInstance.appContext.config.globalProperties.$Progress.finish();
}
async function search() {
    searching.value = true;
    internalInstance.appContext.config.globalProperties.$Progress.start();

    resetBuckets();

    var result = await getData.search(searchString.value);
    var data = result.data.data;

    searching.value = false;
    searched.value = data.Page.media;
    internalInstance.appContext.config.globalProperties.$Progress.finish();
}
function resetBuckets() {
    searched.value = [];
    currentSeason.value = [];
    nextSeason.value = [];
    trending.value = [];
    mostPopular.value = [];
    top.value = [];
}

getApiData();

</script>
<style>
.header-text {
    cursor: pointer;
    font-size: 38px;
    font-weight: 600;
    letter-spacing: .01em;
    padding: 20px;
    padding-left: 17px;
    padding-right: 5px;
    padding-bottom: 0;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    ;
}

.search-wrapper {
    overflow: inherit !important;
}

.loading-img {
    height: 356px;
    background-position-x: center;
    margin-right: auto;
    margin-left: auto;
}

.shadow {
    box-shadow: 6px 10px 15px -6px rgba(0, 0, 0, 0.1)
}

.search-card {
    background-color: inherit;
}

.search-type .v-field__overlay {
    opacity: 0.1;
}

.v-field.v-field--appended {
    --v-field-padding-end: 7px;
}

.searchbar .v-field.v-field--prepended {
    margin-bottom: -6px;
}

.v-field--variant-solo {
    box-shadow: none;
}

.v-select {
    --v-input-padding-top: 0px !important;
}

.v-select .v-field__append-inner {
    margin-top: 5px;
    margin-left: -15px;
    margin-right: -15px;
}

.searchbar .v-field__prepend-inner {
    align-items: flex-start;
}

.v-select .v-field {
    font-size: 40px;
    font-weight: 600;
    letter-spacing: .01em;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    ;
}

.v-select .v-field__input {
    padding-bottom: 5px;
    padding-left: 20px;
}

.v-select .v-field__outline {
    --v-field-border-width: 0px;
}

.filter-btn {
    min-width: 45px;
    margin-left: 14px;
}
</style>
