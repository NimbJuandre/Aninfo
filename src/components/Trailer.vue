<template>
    <div v-if="details.trailer?.id">
        <v-container class="pt-0 pa-4">
            <div class="text-left heading mb-2">
                Trailer
            </div>
            <div class="video-container">
                <LiteYouTubeEmbed :id="details.trailer?.id" title="" />
            </div>
        </v-container>
    </div>
</template>
<script setup>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

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