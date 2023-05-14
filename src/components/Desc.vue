<template>
    <div>
        <div class="d-flex flex-row">
            <div class="text-left heading ml-8 mb-5">
                Description
            </div>
        </div>
        <v-container class="white-bg pa-0 center-container mb-10">
            <p class="desc-text"><span v-html="props.details.description"></span></p>
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