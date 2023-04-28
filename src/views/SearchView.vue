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
            <v-card class="search-card ml-3" flat>
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
        <v-container>
            <Bucket :name="'TRENDING NOW'">
            </Bucket>
        </v-container>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import Bucket from '../components/Bucket.vue'

var searchString = ref("");
const select = reactive({ id: 1 });
const searchTypes = reactive([
    { id: 1, name: "Anime", },
    { id: 2, name: "Manga", },
]);
</script>
<style>
.header-text {
    cursor: pointer;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: .01em;
    padding: 20px;
    padding-left: 30px;
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
}

.v-select .v-field__outline {
    --v-field-border-width: 0px;
}

.filter-btn {
    min-width: 45px;
    margin-left: 14px;
}
</style>
