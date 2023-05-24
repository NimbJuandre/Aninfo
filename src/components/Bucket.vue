<template>
  <v-container class="pl-0">
    <div v-if="name" class="header" @click="ViewMore()">
      <div class="d-flex">
        <h3 class="bucket-text">{{ name }}</h3>
        <v-spacer></v-spacer>
        <label class="view-all text-medium-emphasis text-right">View All</label>
      </div>
    </div>
    <v-container class="pl-0 pr-0">
      <v-row>
        <v-col class="grid" cols="6" sm="4" md="3" lg="3" v-for="(item, index) in media" :key="index">
          <Card :item="item"></Card>
        </v-col>
      </v-row>
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
  media: {
    type: Array
  },
})

function ViewMore() {
  router.push({ name: 'ViewMore', params: { type: props.viewMoreLink } });
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

.grid {
  padding-bottom: 50px;
}
</style>
