<script setup lang="ts">
import routes from "~/lib/constants/routes";

definePageMeta({ name: "Welcome To MonieTracker - Email Sent" });
const { query } = useRoute();
const email = query.email;
const hasOpenedMail = ref(false);
</script>

<template>
  <div
    class="flex flex-col gap-6 justify-center items-center h-[calc(100vh-40px)]"
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
