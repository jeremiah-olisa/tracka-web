<script setup lang="ts">
import routes from "~/lib/constants/routes";

definePageMeta({ name: "Welcome To MonieTracker" });
const email = "jeremiaholisa@test.com";
const hasOpenedMail = ref(false);
</script>

<template>
  <!-- 40px is the padding horizontal -->
  <div
    class="flex flex-col gap-14 justify-center items-center h-[calc(100vh-40px)]"
  >
    <IconOpenMail />
    <div class="onboarding-header-text">
      We have sent an email verification link to your email
    </div>
    <div class="onboarding-desc-text">
      Check your email {{ email }} and click the link to verify your email
      address
    </div>
    <div class="absolute bottom-5">
      <NuxtLink
        @click="() => (hasOpenedMail = true)"
        :href="hasOpenedMail ? routes.getStarted : `mailto:${email}`"
      >
        <Button class="px-20 rounded-full">{{
          hasOpenedMail ? "Continue" : "Open Mail"
        }}</Button>
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
