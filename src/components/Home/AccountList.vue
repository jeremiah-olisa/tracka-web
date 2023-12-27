<template>
  <div class="w-full mt-4" :class="{ 'border-transparent': true }">
    <div class="flex gap-7 flex-col">
      <div class="flex justify-between gap-117">
        <div class="font-medium text-base">
          Your Accounts
        </div>
        <div class="flex flex-row items-center gap-x-1 bg-blue-100 rounded-full px-4">
          <Icon icon="/icons/outline-plus.svg" color="#FF0000" size="20px" />
          <div class="font-medium text-base">
            Add New
          </div>
        </div>
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
import Icon from "./../icons/Icon.vue";
import AccountListItem from "./AccountListItem.vue";
</script>
