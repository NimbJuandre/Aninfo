<template>
    <v-card class="card" ripple outlined elevation="10" @click="ViewDetails(item.id)">
        <v-img aspect-ratio="1" :src="item.coverImage.extraLarge"></v-img>
    </v-card>
    <p class="card-title text-left pt-1">
        {{ title }}
    </p>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue'

const router = useRouter()
const props = defineProps({
    item: {
        type: Object
    }
})

// Computed Props
const title = computed(() => props.item.title.english || props.item.title.userPreferred)

// Functions
function ViewDetails(id) {
    router.push({ name: 'detail', params: { id: props.item.id } })
}

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