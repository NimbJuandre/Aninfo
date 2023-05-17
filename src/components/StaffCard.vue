<template>
    <v-card class="card white-bg" ripple elevation="0">
        <div class="staff">
            <v-img aspect-ratio="1" :src="staff.node.image.large"></v-img>
            <div class="staff-wrapper pa-2">
                <div class="name">
                    {{ staff.node.name.userPreferred }}
                </div>
                <div class="role">
                    {{ functions.camalize(staff.role) }}
                </div>
            </div>
        </div>
    </v-card>
</template>
<script setup>
import functions from '../functions'

const props = defineProps({
    staff: {
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

.staff {
    display: inline-grid;
    grid-template-columns: 60px auto;
    grid-template-areas: "image content";
    height: 80px;
}

.staff .name {
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
    text-align: left;
}

.staff .v-img {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    grid-area: image;
}
</style>