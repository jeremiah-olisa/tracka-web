<template>
  <div class="flex items-center justify-between relative w-full">
    <div
      class="font-medium text-base leading-normal relative inline-block"
    >
      Hi, <span class="text-capitalize">{{ userName }}</span>
    </div>
    <Bell class="relative h-9 w-9" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Bell from "./../icons/Bell.vue";
import store from "./../../_utils/lib/store";

export default defineComponent({
  name: "Header",
  components: {
    Bell,
  },
  data() {
    return {
      userName: store.getUserName(),
    };
  },
});
</script>

<style></style>
