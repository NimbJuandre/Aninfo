<template>
    <v-card class="card" ripple outlined elevation="10">
        <v-img aspect-ratio="1" :src="item.images.large_image_url"></v-img>
    </v-card>
    <p class="card-title text-left pt-1">
        {{ item.title }}
    </p>
</template>
<script setup>
const props = defineProps({
    item: {
        type: Object
    }
})

</script>
<style>
.card {
    transform: scale(1);
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
}
.card:hover {
    transform: scale(1.03);
}
.card-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.v-card {
    height: 100%;
}

.v-responsive {
    height: 100%;
}

.v-responsive__sizer {
    height: 100%;
}

.v-img__img {
    height: 100%;
    object-fit: cover;
}
</style>