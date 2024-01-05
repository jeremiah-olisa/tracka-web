<script setup lang="ts">
import OnboardingMessages from './components/OnboardingMessages.vue'
import IllustrationOne from './components/IllustrationOne.vue'
import { VContainer } from 'vuetify/components'
import { RouteNames } from '@/utils/router'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { computed } from 'vue'
import IllustrationThree from './components/IllustrationThree.vue'
import IllustrationTwo from './components/IllustrationTwo.vue'

const numberStringMap = {
  1: 'one' as const,
  2: 'two' as const,
  3: 'three' as const
}
const currentSplashScreen: Ref<1 | 2 | 3> = ref(1)
const _currentSplashScreen = computed(() => numberStringMap[currentSplashScreen.value])
const router = useRouter()

const skip = () => {
  router.push({ name: RouteNames.Registration })
}

const nextSplash = () => {
  const nextSplashScreen = currentSplashScreen.value + 1

  if (nextSplashScreen > 3) skip()
  if (nextSplashScreen <= 3) currentSplashScreen.value++

  console.log({
    currentSplashScreen: currentSplashScreen.value,
    _currentSplashScreen: _currentSplashScreen.value
  })
}
</script>

<template>
  <div class="onboarding">
    <VContainer>
      <div class="">
        <div role="button" tabindex="0" @click="skip" class="top-action-wrapper">
          <div class="skip-action-wrapper"><div class="text-wrapper-2">Skip</div></div>
        </div>
        <div class="grid grid-rows-2 grid-flow-row gap-0">
          <div class="onboarding-rows">
            <IllustrationOne v-if="currentSplashScreen == 1" />
            <IllustrationTwo v-if="currentSplashScreen == 2" />
            <IllustrationThree v-if="currentSplashScreen == 3" />
          </div>
          <div class="onboarding-rows">
            <OnboardingMessages
              class="onboarding-messages-instance"
              :screens="_currentSplashScreen"
              text="Get an overview of how you are performing and motivate yourself to achieve even more."
              :next="nextSplash"
            />
          </div>
        </div>
      </div>
    </VContainer>
  </div>
</template>

<style scoped>
.onboarding {
  @apply bg-tracka-main h-screen overflow-hidden;
  box-shadow: -107.15px 85.53px 161.66px -56.39px #0000001a;
}
.onboarding .onboarding-rows {
  @apply row-span-1  flex justify-center items-center;
}

.top-action-wrapper {
  @apply flex justify-end;
}
.onboarding .skip-action-wrapper {
  align-items: center;
  background-color: #ffffff26;
  border-radius: 16px;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  padding: 8px 16px;
  top: 0;
}
.onboarding .text-wrapper-2 {
  color: #ffffff;
  font-family: 'Inter-Medium', Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: fit-content;
}
</style>
