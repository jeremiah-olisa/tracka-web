<script setup lang="ts">
import routes from "~/lib/constants/routes";

definePageMeta({ name: "Reset password mail sent" });
const email = "jeremiaholisa@test.com";
const hasOpenedMail = ref(false);
</script>

<template>
  <!-- 40px is the padding horizontal -->
  <div
    class="flex flex-col gap-14 justify-center items-center h-[calc(100vh-40px)]"
  >
    <IconOpenMail />
    <div class="onboarding-header-text">Your email is on the way</div>
    <div class="onboarding-desc-text">
      Check your email {{ email }} and follow the instructions to reset your
      password
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
