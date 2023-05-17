<template>
    <div>
        <v-container class="pt-0 pa-4">
            <div class="text-left heading mb-2">
                Staff
            </div>
            <div class="grid-wrap mb-2 pb-2">
                <StaffCard :staff="staff" v-for="(staff, index) in details.staffPreview.edges" :key="index">
                </StaffCard>
            </div>
        </v-container>
    </div>
</template>
<script setup>
import StaffCard from './StaffCard.vue'
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