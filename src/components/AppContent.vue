<template>
  <VMain class="main-content">
    <VSlideXTransition mode="out-in">
      <RouterView />
    </VSlideXTransition>
    <vue-progress-bar></vue-progress-bar>
  </VMain>
</template>
<script setup>
import { getCurrentInstance, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const internalInstance = getCurrentInstance();

onMounted(() => {
  internalInstance.appContext.config.globalProperties.$Progress.finish();
})

router.beforeEach((to, from, next) => {
  //  does the page we want to go to have a meta.progress object
  if (to.meta.progress !== undefined) {
    let meta = to.meta.progress;
    // parse meta tags
    internalInstance.appContext.config.globalProperties.$Progress.parseMeta(meta);
  }
  //  start the progress bar
  internalInstance.appContext.config.globalProperties.$Progress.start();
  //  continue to next page
  next();
});
</script>
