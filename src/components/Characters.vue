<template>
    <div>
        <v-container class="pt-0 pa-4">
            <div class="text-left heading mb-2">
                Characters
            </div>
            <div class="grid-wrap mb-2 pb-2">
                <CharacterCard :character="character" v-for="(character, index) in details.characterPreview.edges" :key="index">
                </CharacterCard>
            </div>
        </v-container>
    </div>
</template>
<script setup>
import CharacterCard from './CharacterCard.vue'
const props = defineProps({
    details: {
        type: Object
    }
})
</script>
<style>
.heading {
    font-size: 1.1rem;
    font-weight: 500;
}

.grid-wrap {
    display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 15px;
}
</style>