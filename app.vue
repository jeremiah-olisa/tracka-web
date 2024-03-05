<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core';

const onboardedAt = useLocalStorage<string | undefined>('onboardedAt', undefined);

console.log({ onboardedAt: onboardedAt.value })
</script>

<template>
  <div>
    <NuxtLayout>
       <Onboarding v-if="onboardedAt == undefined"/>
       <div v-else>{{ onboardedAt }}</div>
    </NuxtLayout>
  </div>
</template>
