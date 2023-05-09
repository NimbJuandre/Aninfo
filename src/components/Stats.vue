<template>
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
</template>
<script setup>
const props = defineProps({
    stats: {
        type: Object
    }
})

</script>
<style>

</style>