<template>
    <h1>Test</h1>
    <v-container v-if="details">
        <v-img :src="details.bannerImage || details.coverImage.extraLarge">
        </v-img>
    </v-container>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import getData from '../services/getData'

const route = useRoute();
var details = ref(null);

async function getDetails() {
    var data = await getData.getDetails(route.params.id);
    details.value = data.data.data.Media;
}

getDetails();
</script>
<style></style>