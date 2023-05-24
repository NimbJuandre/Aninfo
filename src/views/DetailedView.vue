<template>
    <div v-if="details">
        <v-container class="header-wrapper pa-0">
            <div class="text-left">
                <v-btn class="back-btn ma-4 mt-7" icon @click="backToHome" abs>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </div>
            <div class="banner">
                <v-img :class="{ 'no-image': details.bannerImage === null }" :src="details.bannerImage">
                    <div class="card-shadow"></div>
                </v-img>
            </div>
        </v-container>
        <v-container class="white-bg pa-0 mb-5">
            <div class="header pa-4">
                <div class="d-flex flex-row">
                    <v-img class="thumbnail" :src="details.coverImage.large"></v-img>
                </div>
                <p class="card-title text-left pt-4">
                    {{ title }}
                </p>
                <p v-if="dubAvailable" class="card-dub-available text-left pt-4">
                    English Dub is available
                </p>
            </div>
        </v-container>

        <!-- Stats -->
        <Stats :details="details"></Stats>
        <!-- Desc -->
        <Desc :details="details"></Desc>
        <!-- Relations -->
        <Relations :details="details"></Relations>
        <!-- Characters -->
        <Characters :details="details"></Characters>
        <!-- Staffs -->
        <Staffs :details="details"></Staffs>
        <!-- Trailer -->
        <Trailer :details="details" :key="trailerKey"></Trailer>
        <!-- Recommendations -->
        <Recommendations :details="details"></Recommendations>
    </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex';
import getData from '../services/getData'
import Stats from '../components/Stats.vue'
import Desc from '../components/Desc.vue'
import Relations from '../components/Relations.vue'
import Characters from '../components/Characters.vue'
import Staffs from '../components/Staffs.vue'
import Trailer from '../components/Trailer.vue'
import Recommendations from '../components/Recommendations.vue'

const route = useRoute();
const router = useRouter()
const trailerKey = ref(0);
const store = useStore();
var details = ref(null);
var dubAvailable = ref(false);

watch( // This is to refresh the component when navigating to the same component but different paramaters
    () => route.params,
    (newParams, oldParams) => {
        getDetails();
        getDubStatus();
        trailerKey.value += 1 // Hack to force the trailer component to update to fix the youtube video to autoplay
    }
)

// Computed Props
const title = computed(() => details.value.title.english || details.value.title.userPreferred)

// Functions
async function getDetails() {
    var data = await getData.getDetails(route.params.id);
    var media = data.data.data.Media

    details.value = media;
    window.scrollTo(0, 0)
}
async function getDubStatus() {
    if (store.getters.typeName == 'MANGA') { // Dont check if the dub exists for manga
        dubAvailable.value = false;
        return;
    }

    var data = await getData.getCharacters(route.params.id);
    var media = data.data.data.Media

    if (media.characters?.edges?.some((edge) => edge.role == "MAIN" && edge.voiceActorRoles?.some((actor) => actor.voiceActor.language == "English")))
        dubAvailable.value = true;
    else
        dubAvailable.value = false;
}
function backToHome() {
    router.push({ name: 'home' });
}

getDetails();
getDubStatus()
</script>
<style>
.back-btn {
    position: absolute;
    z-index: 1;
}

.header-wrapper {
    max-width: 100%;
}

.banner {
    height: 210px;
}

.no-image {
    background-color: rgb(39, 44, 56);
    height: 210px;
}

.thumbnail {
    max-width: 100px;
    min-width: 100px;
    background-color: rgba(212, 230, 245, .5);
    border-radius: 5px;
    box-shadow: 0 0 29px rgba(49, 54, 68, .25);
    margin-top: -105px;
}

.card-title {
    font-size: 1.1rem;
    font-weight: 500;
}

.card-dub-available {
    font-size: 0.9rem;
    font-weight: 500;
    color: rgb(61, 180, 242);
}

.card-shadow {
    background: linear-gradient(180deg, rgba(6, 13, 34, 0) 40%, rgba(6, 13, 34, .6));
    height: 100%;
    width: 100%;
}
</style>