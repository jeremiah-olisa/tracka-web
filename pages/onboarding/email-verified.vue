<script setup lang="ts">
import routes from "~/lib/constants/routes";

definePageMeta({ name: "Welcome To MonieTracker" });
const name = "JerryDePredator@test.com";
</script>

<template>
  <!-- 40px is the padding horizontal -->
  <div
    class="flex flex-col gap-14 justify-center items-center h-[calc(100vh-40px)]"
  >
    <IconChecked />
    <div class="onboarding-header-text">
      Hi! <span class="font-extrabold">{{ name }}</span>
      <p>Your account has been verified</p>
    </div>

    <div class="absolute bottom-5">
      <NuxtLink
        :href="routes.home"
      >
        <Button class="px-20 rounded-full">Start Tracking</Button>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
.onboarding-desc-text {
  @apply font-normal text-sm leading-5 text-center font-[#292b2d];
  font-family: "Inter";
  font-style: normal;
}
</style>
