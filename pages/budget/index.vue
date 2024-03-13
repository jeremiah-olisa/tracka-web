<script lang="ts" setup>
import { Plus } from "lucide-vue-next";
import routes from "~/lib/constants/routes";

definePageMeta({
  name: "Budget",
  layout: "default",
  showBottomNavigation: true,
  showTopHeader: true,
  backgroundClass: "bg-primary text-primary-foreground px-[0px!important]",
  bottomNavBackgroundClass: "bg-[#F5F7FF] text-[#150B5B]",
});

interface IBudget {
  name: string;
  category: string;
  amountSpent: number;
  amountBudgeted: number;
  duration: string;
  consumption: number;
}
const budgets: IBudget[] = [
  {
    name: "April Shopping",
    category: "Grocery",
    amountSpent: 14300 * 0.32,
    amountBudgeted: 14300,
    duration: "Monthly",
    consumption: 32,
  },
  {
    name: "May Shopping",
    category: "Grocery",
    amountSpent: 0,
    amountBudgeted: 14300,
    duration: "Monthly",
    consumption: 0,
  },
  {
    name: "June Shopping",
    category: "Grocery",
    amountSpent: 0,
    amountBudgeted: 14300,
    duration: "Monthly",
    consumption: 0,
  },
];
budgets.length = 0;
</script>

<template>
  <div class="flex flex-col absolute w-[inherit] h-[-webkit-fill-available]">
    <div
      class="flex flex-col justify-center items-center my-8 gap-2 budget-parent"
    >
      <p class="budget-total-amount">0</p>
      <p class="budget-desc">You have no budget</p>
      <NuxtLink :href="routes.createBudget">
        <Button
          as="NuxtLink"
          v-if="budgets.length > 0"
          variant="secondary"
          size="sm"
          class=""
        >
          <Plus class="w-4 h-4 mr-2" />Create New Budget
        </Button>
      </NuxtLink>
    </div>
    <ScrollArea
      id="budget-list"
      class="bg-[#F5F7FF] border w-full rounded-t-[32px] flex-grow pb-[84px] pt-[24px] relative overflow-y-auto"
    >
      <div
        v-if="budgets.length < 1"
        class="flex flex-col items-center justify-center"
      >
        <div class="my-10">
          <img src="/assets/images/piggybank.png" />
        </div>
        <h3 class="budget-header mb-2">Welcome</h3>
        <p class="no-budget-text mb-6">
          This is an overview of all your MonieTracka account, so come back
          later
        </p>
        <NuxtLink :href="routes.createBudget">
          <Button variant="primary" size="sm" class="">
            <Plus class="w-4 h-4 mr-2" />Create New Budget
          </Button>
        </NuxtLink>
      </div>
      <div v-else class="flex flex-col items-center justify-center px-5 gap-4">
        <div
          v-for="budget in budgets"
          class="border rounded-2xl w-full bg-primary-55 p-4"
        >
          <div class="flex flex-col">
            <p class="budget-name">{{ budget.name }}</p>
            <div class="flex">
              <img
                src="/assets/images/confetti.png"
                class="h-10 w-10 bg-[#FFEADD] p-2 rounded-full"
              />
              <div class="flex ml-2 flex-grow justify-between">
                <div class="flex justify-center flex-col gap-2">
                  <p class="budget-category">{{ budget.category ?? "Misc" }}</p>
                  <p class="budget-limit">{{ budget.amountBudgeted }}</p>
                </div>
                <p class="budget-amount-spent">
                  ₦ {{ budget.amountSpent.toLocaleString() }}
                </p>
              </div>
            </div>

            <Progress
              class="mt-5 h-1 w-full"
              :model-value="budget.consumption"
              :max="100"
              base-color="bg-[#3e6bc2]"
              indicator-color="bg-[#32FC65]"
            />

            <div class="budget-remarks">
              <p><span class="mr-2">😘</span> You are doing really great!</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  </div>
</template>

<style scoped>
.budget-parent::after {
  @apply bg-contain bg-no-repeat lg:w-[130px] md:w-28 sm:w-24 w-[70px] h-[124px] left-0 block z-0 absolute;
  content: "";
  /* background-position: 110% 20px; */
  background-image: url(/assets/images/background/budget-coin.png);
}
.budget-total-amount {
  @apply font-["Inter"] font-extrabold text-[28px] text-center;
}

.budget-desc {
  @apply font-["Inter"] font-medium text-[14px] leading-6 text-center text-[#ffffffe6];
}

.no-budget-text {
  @apply text-[#150B5B] text-opacity-75 font-['Inter'] font-medium text-xs leading-[160%] text-center w-8/12;
}

.budget-amount-spent {
  @apply flex items-center text-[#21f46a] leading-4 text-[14px] font-bold;
  letter-spacing: -0.5px;
}
.budget-name {
  @apply leading-4 text-xs font-semibold mb-4;
  letter-spacing: -0.008em;
}
.budget-category {
  @apply leading-4 text-[14px] font-semibold;
  letter-spacing: -0.4px;
}
.budget-limit {
  @apply leading-4 text-xs font-normal text-opacity-80;
  letter-spacing: -0.2px;
}
.budget-header {
  @apply leading-4 text-2xl font-bold text-[#150B5B];
  letter-spacing: -0.2px;
}
.budget-remarks {
  @apply font-medium text-[11px] leading-[18px] mt-4;
}
</style>
