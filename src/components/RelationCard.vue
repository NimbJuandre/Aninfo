<template>
    <v-card class="card" ripple outlined elevation="10" @click="ViewDetails(item.id)">
        <v-img aspect-ratio="1" :src="relation.node.coverImage.large"></v-img>
        <v-card-item>
            <div class="title-wrapper">
                <div class="type mb-1">
                    {{ title }}
                </div>
                <div class="title mb-1">
                    {{ title }}
                </div>
                <div class="text-h6 mb-1">
                    Headline
                </div>
            </div>
        </v-card-item>
    </v-card>
</template>
<script setup>
import functions from '../functions'
import { computed } from 'vue'

const props = defineProps({
    relation: {
        type: Object
    }
})

// Computed Props
const title = computed(() => {
    return props.relation.node.title.english || props.relation.node.title.userPreferred
});
</script>
<style>
.card {
    height: 130px;
    margin-right: 25px;
    display: flex;
    width: 375px;
    margin-right: 15px;
}

.card .v-img {
    width: 100px;
    height: 130px;
}

.title-wrapper {
    width: 250px;
    white-space: break-spaces;
}

.title {
    font-size: 1rem !important;
    line-height: 1.2rem;
    text-align: left;
    color: rgb(92, 114, 138);
}
</style>