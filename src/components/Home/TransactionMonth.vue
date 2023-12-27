<template>
  <div class="frame mt-4"><div class="text-wrapper">Today, 18 June</div></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({ name: "TransactionMonth" });
</script>
<style scoped>
.frame {
  align-items: flex-start;
  display: inline-flex;
  gap: 10px;
  position: relative;
}
.frame .text-wrapper {
  font-family: "Inter-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}
</style>
