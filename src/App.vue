<template>
  <v-app>
    <AppContent />
  </v-app>
</template>
<script>
import AppContent from "./components/AppContent.vue";

export default {
  name: "App",
  components: {
    AppContent,
  },
};
</script>
<style>
#app {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.v-application {
  background-color: rgb(237, 241, 245);
  color: rgb(92, 114, 138);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
