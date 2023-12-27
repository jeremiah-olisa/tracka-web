<template>
  <div class="frame mt-4">
    <div class="text-wrapper">Transaction History</div>
    <div class="div">
      <Icon icon="/icons/outline-chevron-down.svg" />
      <div class="text-wrapper-2">{{ currentMonth }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Icon from "./../icons/Icon.vue";
const currentMonth = (new Date).toLocaleString('default', { month: 'long' });;
export default defineComponent({
  name: "SectionHeader",
  components: { Icon },
  data() {
    return {
      currentMonth,
    };
  },
});
</script>
<style scoped>
.frame {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.frame .text-wrapper {
  color: #000000;
  font-family: "Inter-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}
.frame .div {
  align-items: center;
  border-radius: 32px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  position: relative;
}
.frame .icon-outline-chevron {
  height: 13px !important;
  position: relative !important;
  width: 13px !important;
}
.frame .text-wrapper-2 {
  color: #543cdf;
  font-family: "Inter-Medium", Helvetica;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}
</style>
