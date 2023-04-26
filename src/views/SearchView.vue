<template>
    <div>
        <div class="d-flex flex-row">
            <div class="text-left header-text">
                <div class="text-h4">Search</div>
            </div>
            <div class="mt-5">
                <v-select class="search-type" v-model="select.id" :items="searchTypes" item-title="name"
                    item-value="id"></v-select>
            </div>
        </div>
        <v-card class="search-card" flat>
            <v-container class="search-container" fluid grid-list-lg>
                <v-layout row wrap>
                    <v-text-field class="searchbar" bg-color="rgb(251,251,251)" color="grey" density="compact"
                        v-model="searchString" label="Search" single-line prepend-inner-icon="mdi-magnify"
                        hide-details></v-text-field>
                    <v-btn size="large">
                        <v-icon size="large" icon="mdi-filter-multiple-outline"></v-icon>
                    </v-btn>
                </v-layout>
            </v-container>
        </v-card>
        <v-btn size="large" @click="start()">
            Start
        </v-btn>
        <v-btn size="large" @click="stop()">
            Stop
        </v-btn>
    </div>
</template>
<script setup>
import { getCurrentInstance, ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const internalInstance = getCurrentInstance();

onMounted(() => {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    internalInstance.appContext.config.globalProperties.$Progress.start();
    setTimeout(() => {
        internalInstance.appContext.config.globalProperties.$Progress.finish();
    }, 3500);
})

var searchString = ref("");
const select = reactive({ id: 1 });
const searchTypes = reactive([
    { id: 1, name: "Anime", },
    { id: 2, name: "Manga", },
]);

function start() {
    router.push({
        name: 'search2'
    })
}
</script>
<style>
.header-text {
    cursor: pointer;
    font-size: 40px;
    font-weight: 900;
    letter-spacing: .01em;
    padding: 35px;
    padding-left: 30px;
    padding-right: 5px;
    padding-bottom: 0;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    ;
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
</style>
