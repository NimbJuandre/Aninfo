<template>
    <v-container>
        <v-img>

        </v-img>
    </v-container>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
    id: {
        type: Number
    },
    Type: { // 1 = Anime, 2 = Manga
        type: Number
    },
});
var details = ref(null);

async function getDetails() {
    if(props.Type === 1){ // Anime
        details.value = await api.getAnime(props.id);
    } else // Manga
    {

    }
}
</script>
<style></style>