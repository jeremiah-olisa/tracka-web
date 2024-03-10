<script setup lang="ts">
import routes from "~/lib/constants/routes";

definePageMeta({ name: "Get Started", backgroundClass: "bg-primary" });
const name = "JerryDePredator!";
</script>

<template>
  <!-- 40px is the padding horizontal -->
  <div class="flex flex-col gap-5 items-center h-[calc(100vh-40px)]">
    <div class="w-full flex justify-between">
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
    <NuxtLink
      :href="routes.emailSent"
      class="flex w-full h-32 bg-[#432DEC] border-green-300 border-opacity-15 rounded-2xl border p-5"
    >
      <div class="flex flex-col gap-2 flex-grow-[2]">
        <div
          class="text-white text-sm font-semibold font-['Inter'] leading-none"
        >
          Verify your email address
        </div>
        <div
          class="text-white text-opacity-90 text-xs font-normal font-['Inter'] leading-none"
        >
          This is the bank account we would track and manage your spendings
        </div>
      </div>
      <div class="rotate-[25deg]">
        <IconAtSymbol />
      </div>
    </NuxtLink>
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
