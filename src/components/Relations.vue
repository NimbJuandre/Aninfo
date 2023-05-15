<template>
    <div>
        <v-container class="pa-4">
            <div class="text-left heading mb-2">
                Relations
            </div>
            <div class="card-list mb-2 pb-2">
                <RelationCard :relation="relation" v-for="(relation, index) in details.relations.edges" :key="index">
                </RelationCard>
            </div>
        </v-container>
    </div>
</template>
<script setup>
import RelationCard from './RelationCard.vue'
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