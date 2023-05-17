<template>
    <v-card class="card white-bg" ripple elevation="0" @click="viewDetails(props.relation.node.id)">
        <v-img aspect-ratio="1" :src="relation.node.coverImage.large"></v-img>
        <v-card-item class="card-item">
            <div class="title-wrapper">
                <div class="type mb-2">
                    {{ functions.camalize(props.relation.relationType) }}
                </div>
                <div class="title">
                    {{ title }}
                </div>
                <div class="typeAndStatus mb-1">
                    {{ typeAndStatus }}
                </div>
            </div>
        </v-card-item>
    </v-card>
</template>
<script setup>
import functions from '../functions';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
    relation: {
        type: Object
    }
})

// Computed Props
const title = computed(() => {
    return props.relation.node.title.english || props.relation.node.title.userPreferred
});
const typeAndStatus = computed(() => {
    return functions.camalize(`${props.relation.node.format} · ${props.relation.node.status}`);
});

// Functions
function viewDetails(id) {
    var type = props.relation.node.type.toLowerCase();
    router.push({ name: 'Detail', params: { type: type, id: id } });
}
</script>
<style scoped>
.card {
    height: 130px;
    margin-right: 25px;
    display: flex;
    width: 375px;
    margin-right: 15px;
}

.card-item {
    display: block;
}

.card .v-img {
    width: 100px;
    height: 130px;
}

.title-wrapper {
    width: 250px;
    white-space: break-spaces;
}

.type {
    line-height: 1.2rem;
    font-size: 1rem !important;
    text-align: left;
    color: rgb(61, 180, 242)
}

.title {
    font-size: 0.9rem !important;
    line-height: 1.1rem;
    text-align: left;
    color: rgb(92, 114, 138);
}

.typeAndStatus {
    font-size: 0.8rem !important;
    text-align: left;
    color: rgb(146, 153, 161);
    bottom: 10px;
    position: absolute;
}
</style>