<template>
    <div v-if="details.trailer?.id">
        <v-container class="pt-0 pa-4">
            <div class="text-left heading mb-2">
                Trailer
            </div>
            <div class="video-container">
                <YouTube :src="link" :vars="{ autoplay: 0 }" @ready="onReady" ref="youtubeEl" />
            </div>
        </v-container>
    </div>
</template>
<script setup>
import YouTube from 'vue3-youtube'
import { ref, computed, onMounted } from 'vue'

const youtubeEl = ref(null);
const props = defineProps({
    details: {
        type: Object
    }
})

// Computed Props
const link = computed(() => `https://www.youtube.com/watch?v=${props.details.trailer?.id}`)

function onReady() {
    youtubeEl.value.pauseVideo()
}
</script>
<style>
.heading {
    font-size: 1.1rem;
    font-weight: 500;
}

.video-container>div {
    position: relative !important;
    padding-bottom: 56.25% !important;
    width: auto !important;
    height: auto !important;
}

.video-container iframe {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
}
</style>