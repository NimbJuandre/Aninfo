<template>
    <div>
        <v-container class="pa-4">
            <div class="text-left heading mb-2">
                Description
            </div>
            <p class="desc-text white-bg"><span v-html="props.details.description"></span></p>
        </v-container>
    </div>
</template>
<script setup>
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

.desc-text {
    text-align: left;
    border-radius: 4px;
    font-size: 1.0rem;
    padding: 20px;
}
</style>