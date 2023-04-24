<template>
    <div>
        <div class="d-flex flex-row">
            <div class="text-left header-text">
                <div class="text-h4">Search</div>
            </div>
            <div class="mt-5">
                <v-select v-model="select.id" :items="searchTypes" item-title="name" item-value="id"></v-select>
            </div>
        </div>
        <v-card class="ml-5 mr-5">
            <div class="d-flex flex-row">
                <v-text-field v-model="searchString" label="Search" single-line
                    hide-details></v-text-field>
                    <!-- <v-button>
                        <v-icon icon="mdi-magnify"></v-icon>
                    </v-button> -->
            </div>
        </v-card>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'

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
    font-weight: 900;
    letter-spacing: .01em;
    padding: 35px;
    padding-left: 30px;
    padding-right: 5px;
    padding-bottom: 0;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    ;
}

.v-select {
    --v-input-padding-top: 0px !important;
}

.v-select .v-field__append-inner {
    margin-top: 5px;
    margin-left: -15px;
    margin-right: -15px;
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
