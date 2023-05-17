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
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter()
const internalInstance = getCurrentInstance();

onMounted(() => {
  internalInstance.appContext.config.globalProperties.$Progress.finish();
})

router.beforeEach((to, from, next) => {
  const parts = to.path.split("/");

  if (parts.length >= 2) {
    const type = parts[2];
    if (type == 'anime')
      store.commit('setType', 1);
    else if (type == 'manga')
      store.commit('setType', 2);
  }

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
