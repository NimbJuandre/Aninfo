<template>
  <v-container>
    <div class="header" @click="ViewMore()">
      <div class="d-flex">
        <h3 class="bucket-text">{{ name }}</h3>
        <v-spacer></v-spacer>
        <label class="view-all text-medium-emphasis text-right">View All</label>
      </div>
    </div>
    <v-container fluid grid-list-md>
      <v-layout row wrap v-if="data">
        <!-- <v-responsive v-if="loading" class="mx-auto">
          <v-responsive class="ma-3" height="125" v-for="index in 5" :key="index">
            <v-skeleton-loader ref="skeleton" :boilerplate="false" type="image" :tile=true
              class="mx-auto"></v-skeleton-loader>
          </v-responsive>
        </v-responsive> -->
        <label>{{ data.label }}</label>
        <div v-for="item in data" :key="item.id" class="d-flex align-center flex-column xs md6 lg6 pa-3">
          <Card :item="item"></Card>
        </div>
      </v-layout>
    </v-container>
  </v-container>
</template>
<script setup>
import { useRouter } from 'vue-router';
import Card from './Card.vue'

const router = useRouter()
const props = defineProps({
  name: {
    type: String
  },
  viewMoreLink: {
    type: String
  },
  data: {
    type: Array
  },
})

function ViewMore() {
  router.push({ path: `${router.currentRoute.value.path}/${this.props.viewMoreLink}` })
}
</script>
<style>
.header {
  cursor: pointer;
}

.view-all {
  cursor: pointer;
}

.bucket-text {
  font-weight: 600;
}
</style>
