<template>
  <div
    class="bg-tracka-main flex flex-col items-center justify-center h-screen"
  >
    <img src="/images/word-mark-logo-light.svg" alt="TRACKA LOGO" width="350" />
    <div class="mt-4 flex items-center text-white">
      <span class="mr-2">Loading...</span>
      <font-awesome-icon icon="fa-spinner" size="xl" spin />
    </div>
  </div>
</template>

<script lang="ts">
import { RouteNames } from "./../_utils/routes.ts";

export default {
  name: "SplashPage",
  mounted() {
    setTimeout(() => {
      localStorage.setItem("visited", "true");
      this.$router.push({ name: RouteNames.Home });
    }, 5000);
  },
};
</script>
