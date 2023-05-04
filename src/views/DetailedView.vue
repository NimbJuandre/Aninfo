<template>
    <h1>Test</h1>
    <v-container v-if="details">
        <v-img :src="details.pictures[1].jpg.large_image_url">

        </v-img>
    </v-container>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import api from '../api'

const route = useRoute();
var details = ref(null);

async function getDetails() {
    console.log(route);
    details.value = await api.getData(route.params.id);
    debugger;
}

getDetails();
</script>
<style></style>