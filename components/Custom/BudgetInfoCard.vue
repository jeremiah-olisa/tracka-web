<template>
  <div class="border rounded-2xl w-full bg-primary-55 p-4 py-8">
    <div class="flex flex-col">
      <p v-if="budgetCategory" class="budget-category">{{ budgetCategory }}</p>
      <div class="flex">
        <img
          src="/assets/images/confetti.png"
          class="h-10 w-10 bg-[#FFEADD] p-2 rounded-full"
        />
        <div class="flex ml-2 flex-grow justify-between">
          <div class="flex justify-center flex-col gap-2">
            <p class="budget-name">{{ budgetName || "Untitled budget" }}</p>
            <p class="budget-limit">₦ {{ amountBudgeted.toLocaleString() }}</p>
          </div>
          <p class="budget-amount-spent">
            ₦ {{ amountSpent.toLocaleString() }}
          </p>
        </div>
      </div>

      <Progress
        class="mt-5 h-1 w-full"
        :model-value="consumption"
        :max="100"
        base-color="bg-[#3e6bc2]"
        indicator-color="bg-[#32FC65]"
      />

      <div class="budget-remarks">
        <p><span class="mr-2">😘</span> You are doing really great!</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { budgetName, budgetCategory, amountBudgeted, amountSpent, consumption } =
  defineProps<{
    budgetName: string;
    budgetCategory?: string;
    amountBudgeted: number;
    amountSpent: number;
    consumption: number;
  }>();
</script>

<style scoped>
* {
  @apply text-white;
}
.budget-category {
  @apply leading-4 text-xs font-semibold mb-4;
  letter-spacing: -0.008em;
}
.budget-name {
  @apply leading-4 text-[14px] font-semibold;
  letter-spacing: -0.4px;
}
.budget-limit {
  @apply leading-4 text-xs font-normal text-opacity-80;
  letter-spacing: -0.2px;
}
.budget-remarks {
  @apply font-medium text-[11px] leading-[18px] mt-4;
}
.budget-amount-spent {
  @apply flex items-center text-[#21f46a] leading-4 text-[14px] font-bold;
  letter-spacing: -0.5px;
}
</style>
