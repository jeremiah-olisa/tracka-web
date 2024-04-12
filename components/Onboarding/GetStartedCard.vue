<script lang="ts" setup>
const { header, description, icon, done } = defineProps({
  header: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  done: { type: Boolean, required: true },
});

const emit = defineEmits(["clicked"]);

const handler = () => {
  if (!done) emit("clicked");
};
</script>

<template>
  <div role="button" :tabindex="0" @click="handler" class="card" :class="icon">
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
  background-image: url("~/assets/images/at.png");
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
