<script lang="ts" setup>
import OnboardingIllustrationOne from "./Illustration/One.vue";
import OnboardingIllustrationTwo from "./Illustration/Two.vue";
import OnboardingIllustrationThree from "./Illustration/Three.vue";

type Screens = keyof typeof onboardingContent;

const onboardingScreen = ref<Screens>(1);

const onboardingContent = {
  1: {
    element: OnboardingIllustrationOne,
    title: "You ought to know where your money goes",
    description:
      "Get an overview of how you are performing and motivate yourself to achieve even more.",
  },
  2: {
    element: OnboardingIllustrationTwo,
    title: "Gain total control of your money",
    description:
      "Track your transaction easily, with categories and financial report",
  },
  3: {
    element: OnboardingIllustrationThree,
    title: "Plan ahead and manage your money better",
    description:
      "Setup your budget for each category so you in control. Track categories you spend the most money on",
  },
};

const onboardingContentLength = Object.keys(onboardingContent).length;

const nextScreen = (screen?: number) => {
  if (screen && screen >= 1 && screen <= 3) {
    onboardingScreen.value = screen as Screens; // Convert to Screens type
  } else {
    const currentScreenIndex = Number(onboardingScreen.value); // Convert current screen to number
    if (currentScreenIndex <= 3) {
      onboardingScreen.value = (currentScreenIndex + 1) as Screens; // Increment the screen
    }
  }

  if (Number(onboardingScreen.value) > 3 || (screen != null && screen >= 4)) {
    skip();
  }
};

const skip = () => {
  localStorage.setItem('onboardedAt', Date.now().toString());
  alert('skip')
  // navigateTo("/auth/login", { replace: true });
};
</script>

<template>
  <div class="bg-background flex flex-col h-screen items-center p-5">
    <div class="max-w-[380px] lg:max-w-lg md:max-w-md">
      <div class="flex h-[2vh] items-baseline flex-row-reverse">
        <Button
          @click="skip()"
          size="sm"
          variant="main"
          class="rounded-2xl px-4"
          >Skip</Button
        >
      </div>
      <div class="flex h-[45vh] justify-center items-center">
        <component
          :is="onboardingContent[onboardingScreen].element"
        ></component>
      </div>
      <div
        class="flex flex-col h-[45vh] justify-center text-center bg-secondary rounded-2xl p-6 gap-3"
      >
        <div class="onboarding-header text-pretty line-clamp-2">
          {{ onboardingContent[onboardingScreen].title }}
        </div>
        <div class="onboarding-text text-pretty line-clamp-3 px-6">
          {{ onboardingContent[onboardingScreen].description }}
        </div>
        <div class="flex justify-center items-center gap-x-1">
          <button
            v-for="index in onboardingContentLength"
            :key="index"
            type="button"
            :aria-screen="index"
            @click="nextScreen(index)"
            class="w-3 h-3 rounded-full"
            :class="{
              'bg-primary': onboardingScreen === index,
              'bg-slate-400': onboardingScreen !== index,
              'h-6': onboardingScreen === index,
              'h-4': onboardingScreen !== index,
            }"
          ></button>
        </div>
        <div class="flex justify-center items-center">
          <div class="w-6/12">
            <Button
              @click="nextScreen()"
              variant="primary"
              size="lg"
              class="w-full rounded-full"
              >Next</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.onboarding-header {
  @apply pt-1 font-[Inter] font-bold text-wrap text-3xl flex items-center justify-center content-center;
  font-style: normal;
  letter-spacing: -0.5px;
  color: #13085e;
}

.onboarding-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  /* or 21px */
  text-align: center;
  color: rgba(19, 9, 94, 0.8);
}
</style>
