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
                            density="compact" v-model="searchString" label="Search" single-line
                            prepend-inner-icon="mdi-magnify" hide-details></v-text-field>
                        <v-btn class="filter-btn shadow" size="large">
                            <v-icon size="large" icon="mdi-filter-multiple-outline"></v-icon>
                        </v-btn>
                    </v-layout>
                </v-container>
            </v-card>
        </v-container>
        <v-container class="pr-0">
            <div v-if="loading">
                <v-responsive class="mx-auto">
                    <v-responsive class="ma-3" height="125" v-for="index in 5" :key="index">
                        <v-skeleton-loader ref="skeleton" :boilerplate="false" type="image" :tile=true
                            class="mx-auto"></v-skeleton-loader>
                    </v-responsive>
                </v-responsive>
            </div>
            <div v-if="!loading">
                <Bucket v-if="trending" :media="trending" :name="'TRENDING'" :viewMoreLink="'trending'">
                </Bucket>
                <Bucket v-if="currentSeason" :media="currentSeason" :name="'HOT THIS SEASON'"
                    :viewMoreLink="'currentSeason'">
                </Bucket>
                <Bucket v-if="nextSeason" :media="nextSeason" :name="'COMMING NEXT SEASON'" :viewMoreLink="'nextSeason'">
                </Bucket>
                <Bucket v-if="mostPopular" :media="mostPopular" :name="'ALL TIME POPULAR'" :viewMoreLink="'mostPopular'">
                </Bucket>
                <Bucket v-if="top" :media="top" :name="'Top'" :viewMoreLink="'top'">
                </Bucket>
            </div>
        </v-container>
    </div>
</template>
<script setup>
import { ref, reactive, watch } from 'vue'
import getData from '../services/getData'
import Bucket from '../components/Bucket.vue'
import { useStore } from 'vuex'

const store = useStore();
var currentSeason = ref(null);
var nextSeason = ref(null);
var trending = ref(null);
var mostPopular = ref(null);
var top = ref(null);

var searchString = ref("");
var loading = ref(false);
const select = reactive({ id: store.getters.type });
const searchTypes = reactive([
    { id: 1, name: "Anime", },
    { id: 2, name: "Manga", },
]);

// Watches
watch(select, (newValue, oldValue) => {
    store.commit('setType', newValue.id);
    getApiData();
});


// functions
async function getApiData() {
    loading.value = true;

    currentSeason = ref(null);
    nextSeason = ref(null);
    trending = ref(null);
    mostPopular = ref(null);
    top = ref(null);

    var result = await getData.getHomePageSections();
    var data = result.data.data;

    trending.value = data.trending.media;
    mostPopular.value = data.popular.media;
    top.value = data.top.media

    if (store.getters.type === 1) {
        currentSeason.value = data.season.media;
        nextSeason.value = data.nextSeason.media;
    }

    loading.value = false;
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
