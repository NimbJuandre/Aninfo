<template>
    <v-card class="card white-bg" ripple elevation="0">
        <div class="character">
            <v-img aspect-ratio="1" :src="character.node.image.large"></v-img>
            <div class="character-wrapper pa-2">
                <div class="name">
                    {{ character.node.name.userPreferred }}
                </div>
                <div class="role">
                    {{ functions.camalize(character.role) }}
                </div>
            </div>
        </div>
        <div class="staff">
            <v-img aspect-ratio="1" :src="character.voiceActors[0].image.large"></v-img>
            <div class="character-wrapper pa-2">
                <div class="name">
                    {{ character.voiceActors[0].name.userPreferred }}
                </div>
                <div class="role">
                    {{ functions.camalize(character.voiceActors[0].language) }}
                </div>
            </div>
        </div>
    </v-card>
</template>
<script setup>
import functions from '../functions'

const props = defineProps({
    character: {
        type: Object
    }
})

</script>
<style scoped>
.card {
    background: rgb(250, 250, 250);
    border-radius: 3px;
    display: inline-grid;
    grid-template-columns: 50% 50%;
    height: 80px;
    overflow: hidden;
}

.character {
    display: inline-grid;
    grid-template-columns: 60px auto;
    grid-template-areas: "image content";
    height: 80px;
}

.staff {
    grid-template-areas: "content image";
    grid-template-columns: auto 60px;
    display: inline-grid;
}

.staff .name {
    text-align: right;
}

.character .name {
    text-align: left;
}

.name {
    font-size: 0.9rem !important;
    line-height: 1.1rem;
    color: rgb(92, 114, 138);
}

.role {
    font-size: 0.8rem !important;
    text-align: left;
    color: rgb(146, 153, 161);
    bottom: 10px;
    position: absolute;
}

.staff .role {
    right: 70px;
}

.character .role {
    text-align: left;
}

.staff .v-img {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    grid-area: image;
}
</style>