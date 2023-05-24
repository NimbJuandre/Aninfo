<template>
    <div>
        <v-card class="card" ripple outlined elevation="10" @click="viewDetails(item.mediaRecommendation.id)">
            <v-img aspect-ratio="1" :src="item.mediaRecommendation.coverImage.large"></v-img>
        </v-card>
        <p class="card-title text-left pt-1">
            {{ title }}
        </p>
    </div>
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
const title = computed(() => props.item.mediaRecommendation.title.english || props.item.mediaRecommendation.title.userPreferred)

// Functions
function viewDetails(id) {
    var type = props.item.mediaRecommendation.type.toLowerCase();
    router.push({ name: 'Detail', params: { type: type, id: id } });
}

</script>
<style scoped>
.card {
    height: 180px;
    margin-right: 25px;
    display: flex;
    width: 130px;
    margin-right: 30px;
}

.card-title {
    font-size: 0.8rem;
    font-weight: 400;
    max-width: 130px;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

.card .v-img {
    width: 130px;
    height: 180px;
}
</style>