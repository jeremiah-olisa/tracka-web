<script setup lang="ts">
import routes from "~/lib/constants/routes";

definePageMeta({ name: "Get Started", backgroundClass: "bg-primary" });
const name = "JerryDePredator!";

const verifyEmail = () => {
  navigateTo(routes.emailSent, { replace: true });
};

const completedSteps = ref<number[]>([]);

function toggleStep(step: 1 | 2 | 3) {
  completedSteps.value.includes(step)
    ? (completedSteps.value = completedSteps.value.filter((c) => c != step))
    : completedSteps.value.push(step);
}
const steps = [
  {
    id: 1,
    header: "Verify your email address",
    icon: "at-symbol",
    description:
      "This is the bank account we would track and manage your spendings",
    action: () => {
      toggleStep(1);
    },
  },
  {
    id: 2,
    header: "Connect your bank account",
    icon: "bank",
    action: () => {
      toggleStep(2);
    },
    description:
      "This is the bank account we would track and manage your spendings",
  },
  {
    id: 3,
    header: "Setup a security pin",
    icon: "lock",
    action: () => {
      toggleStep(3);
    },
    description:
      "This is the bank account we would track and manage your spendings",
  },
];
</script>

<template>
  <!-- 40px is the padding horizontal -->
  <div class="flex flex-col gap-5 items-center h-[calc(100vh-40px)]">
    <div class="w-full flex justify-between mt-3">
      <div class="flex flex-col gap-1">
        <div class="header-text">Get started</div>
        <div class="header-desc">Get most out of your Monietracka account</div>
      </div>
      <div>
        <NuxtLink :href="routes.home">
          <Button
            class="bg-white bg-opacity-15 text-white rounded-full"
            size="sm"
            >Skip</Button
          >
        </NuxtLink>
      </div>
    </div>
    <!-- <NuxtLink
      :href="routes.emailSent"
    > -->
    <!-- </NuxtLink> -->
    <OnboardingGetStartedCard
      v-for="step in steps"
      @clicked="step.action"
      :header="step.header"
      :description="step.description"
      :icon="step.icon"
      :done="completedSteps.includes(step.id)"
    />
  </div>
</template>

<style scoped>
.header-text {
  @apply font-[Inter] font-bold text-2xl leading-5 text-[#eae8fd];
  font-style: normal;
}

.header-desc {
  @apply font-[Inter] font-normal text-[#EAE7FD] text-xs leading-5;
  font-style: normal;
}
</style>
