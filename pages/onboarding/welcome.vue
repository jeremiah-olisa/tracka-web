<script setup lang="ts">
import routes from "~/lib/constants/routes";

definePageMeta({ name: "Welcome To MonieTracker" });
const name = "JerryDePredator!";
</script>

<template>
  <!-- 40px is the padding horizontal -->
  <div
    class="flex flex-col gap-14 justify-center items-center h-[calc(100vh-40px)]"
  >
    <IconChecked />
    <div class="onboarding-header-text">
      Hi! <span class="font-extrabold">{{ name }}</span>
      <p>Welcome to MonieTracka</p>
    </div>
    <div class="absolute bottom-5">
      <NuxtLink :href="routes.getStarted">
        <Button class="px-20 rounded-full">Let's get started</Button>
      </NuxtLink>
    </div>
  </div>
</template>
