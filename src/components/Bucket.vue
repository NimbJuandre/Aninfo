<template>
  <v-container fluid grid-list-md>
    <div class="header" @click="ViewMore()">
      <div class="d-flex">
        <h3 class="bucket-text">{{ name }}</h3>
        <v-spacer></v-spacer>
        <label class="text-medium-emphasis text-right">View All</label>
      </div>
    </div>
    <v-layout row wrap>
      <div>Test</div>
      <!-- <List :list="list" @removeSharedListRefToUser="removeSharedListRefToUser"></List> -->
    </v-layout>
  </v-container>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps({
  name: {
    type: String
  },
  viewMoreLink: {
    type: String
  },
  data: {
    type: Array,
  }
})

function ViewMore() {
  router.push({ path: `/${viewMoreLink}` })
}
</script>
<style>
.bucket-text {
  font-weight: 600;
}
</style>
