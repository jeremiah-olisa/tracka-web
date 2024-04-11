<script lang="ts" setup>
import avatar from "~/assets/images/avatar.png";
import discount from "~/assets/icons/discount.svg";

definePageMeta({
  name: "Home",
  showBottomNavigation: true,
  backgroundClass: "bg-primary text-primary-foreground",
});

const { getUserName } = useAuthentication();
const name = getUserName.value;

const expenses = [
  { bank: "Total Budget", amount: 12000000 },
  { bank: "Kuda bank", amount: 12000 },
  { bank: "GT bank", amount: 950 },
  { bank: "PiggyVest", amount: 1050 },
];
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <div class="flex justify-between items-center text-white">
      <div>
        <h3 class="page-header-text">
          Hello, <b>{{ name }}</b>
        </h3>
        <p class="page-subtitle-text">Your finances are looking good</p>
      </div>
      <div class="flex flex-row gap-x-2 items-center">
        <IconBell />
        <IconSearch />
      </div>
    </div>
    <section class="text-white">
      <div
        class="w-full doodle-img bg-primary-35 mb-4 rounded-3xl p-5 flex flex-col"
      >
        <div class="flex flex-col items-center mb-9">
          <div
            class="flex items-center mb-3.5 justify-center w-14 h-14 rounded-full bg-[#BDD6FF]"
          >
            <img :src="avatar" alt="" />
          </div>
          <p class="font-medium text-xs text-[#FAFCFF] mb-2">
            Your available balance is
          </p>
          <h1 class="font-bold text-light text-3xl mb-4">N20,983</h1>
          <p class="font-medium text-xs text-light text-center mb-2 max-w-48">
            By this time last month, you spent slightly higher (N22,719)
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <div
            v-for="expense in expenses"
            :key="expense.bank"
            class="flex items-center justify-between"
          >
            <p
              class="text-xs text-[#e5f0ff] font-medium tracking-[-0.126px] leading-normal"
            >
              {{ expense.bank }}
            </p>

            <p class="text-xs text-light font-medium leading-normal">
              N{{ expense.amount.toLocaleString() }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex p-4 bg-primary-77-37 rounded-2xl">
        <div
          class="relative w-10 h-10 bg-primary-60 flex items-center justify-center rounded-[0.625rem]"
        >
          <span
            class="inline-block bg-orange-400 h-3.5 w-3.5 -top-1 -right-1 rounded-full absolute"
          ></span>
          <img :src="discount" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header-text {
  @apply text-base font-medium  leading-[19px] mt-3;
  font-style: normal;
  letter-spacing: -0.0105em;
}

.page-subtitle-text {
  font-family: "Inter";
  font-style: normal;
  @apply text-xs font-normal leading-[18px] text-white bg-opacity-80;
}

.doodle-img {
  background-image: url("~/assets/icons/doodle-bg.svg");
  box-shadow: 0px 16px 64px -32px rgba(0, 0, 0, 0.24);
  background-repeat: repeat;
}
</style>
