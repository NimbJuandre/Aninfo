<template>
    <div>
        <v-container class="pt-0 pa-4">
            <div class="text-left heading mb-2">
                Recommendations
            </div>
            <div class="card-list mb-2 pb-2">
                <RecommendationsCard :item="recommendation" v-for="(recommendation, index) in details.recommendations.nodes"
                    :key="index">
                </RecommendationsCard>
            </div>
        </v-container>
    </div>
</template>
<script setup>
import RecommendationsCard from './RecommendationsCard.vue'

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

.card-list {
    display: -webkit-box;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
}
</style>