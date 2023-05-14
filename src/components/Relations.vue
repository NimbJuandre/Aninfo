<template>
    <div>
        <div class="d-flex flex-row">
            <div class="text-left heading ml-8 mb-5">
                Relations
            </div>
        </div>
        <v-container class="card-list white-bg pa-0 center-container mb-10">
            <RelationCard :relation="relation" v-for="(relation, index) in details.relations.edges" :key="index">
            </RelationCard>
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