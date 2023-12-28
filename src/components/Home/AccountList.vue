<template>
  <div class="w-full mt-4" :class="{ 'border-transparent': true }">
    <div class="flex gap-7 flex-col">
      <div class="flex justify-between gap-117">
        <div class="font-medium text-base">
          Your Accounts
        </div>
        <AddAccountModal />
      </div>
      <div class="flex flex-col gap-4">
        <AccountListItem />
        <AccountListItem />
        <AccountListItem />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AccountListItem from "./AccountListItem.vue";
import AddAccountModal from "./Account/AddAccountModal.vue";
</script>