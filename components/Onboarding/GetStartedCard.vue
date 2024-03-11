<script lang="ts" setup>
const { header, description, icon, done } = defineProps({
  header: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  done: { type: Boolean, required: true },
});

const emit = defineEmits(["clicked"]);
</script>

<template>
  <div @click="emit('clicked')" class="card" :class="icon">
    <IconChecked v-if="done" :width="50" :height="50" />
    <IconUncompletedStep v-else :width="50" :height="50" color="#C0D5FD" />
    <div class="flex flex-col justify-around gap-3">
      <h3>{{ header }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply text-white w-full h-[124px] p-3 rounded-2xl flex flex-row justify-start items-center bg-primary-55 relative overflow-hidden gap-4;
}
.card::after {
  content: "";
  background-position: 110% 20px;
  @apply bg-contain bg-no-repeat lg:w-[130px] md:w-28 sm:w-24 w-[70px] h-[124px] right-[-30px] top-[10px] block rotate-[26deg] z-0 absolute;
}
.card.at-symbol::after {
  background-image: url("https://s3-alpha-sig.figma.com/img/c030/aab1/aa6fc632ecaf1281c4137315560250b5?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OCWuRTH7QBXgCaKT5zx~kSRjISsW8rbAFAgCRpzBNCHFYkIe03HK7DIH~s52-SNH8PuhGJ18tCbs~aV1ydaAuY7XSxxNkYnexgmXC4mH2adS4OUqJUK0U~m0VuS-XVlrqC-ppGpocANU9oRWEq4X4WwmQ8M9jl~CyabTtutN34~FdOw4KBHNrvXSw~SR9LKTAGUXmX8clmLgqRF-s5EDBX2FOBs1vnkw2uDHcOKcfGP9Tz~Zv-Q~mIrLDByNftFT3Q8aDV9m3Ho3RBHxnDf-F7XCLDavNmhP6Hy8W0VoAU9cOGlT3p2ipDjFrM6Yu-mnoE5PPoRkiSore7sLHANdVg__");
}
.card.bank::after {
  background-image: url("~/assets/images/bank.png");
}
.card.lock::after {
  background-image: url("~/assets/images/lock.png");
}
.card > * h3 {
  @apply text-sm font-semibold;
}
.card > * p {
  @apply text-xs leading-4 max-w-[220px];
}
</style>
