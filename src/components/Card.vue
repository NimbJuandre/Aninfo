<template>
    <v-card width="100px" height="100px" class="pa-3" ripple outlined elevation="10">
        <v-img :src="item.images.large_image_url" cover></v-img>
    </v-card>
</template>
<script setup>
const props = defineProps({
    item: {
        type: Object
    }
})

</script>
<style></style>