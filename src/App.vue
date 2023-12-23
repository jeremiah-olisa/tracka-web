<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/splash">Splash</router-link>
  </div> -->
  <router-view />
</template>

<script lang="ts">
import { RouteNames } from "./_utils/routes";

// import Splash from "./pages/SplashPage.vue";
// import Home from "./pages/HomePage.vue";

export default {
  mounted() {
    // Check if it's the first visit
    const isFirstVisit = !localStorage.getItem("visited");

    // Show the splash screen and mark the visit
    if (isFirstVisit)
      this.$router.push({ name: RouteNames.Splash, replace: true });
  },
};
</script>
