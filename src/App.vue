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
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpgradeUI = true;
      });
    }
  },

  methods: {
    async accept() {
      this.showUpgradeUI = false
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
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

.white-bg {
  background: rgb(250, 250, 250);
}

.center-container {
  width: 90%;
}

a {
  text-decoration: none;
  color: inherit;
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
