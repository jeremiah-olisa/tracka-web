<template>
  <div class="frame mt-4">
    <img
      class="casual-life-girl"
      alt="Casual life girl"
      src="/images/casual-life-3d-girl-planning-budget-with-tablet-and-piggy-bank-1.png"
    />
    <div class="div">
      <p class="text-wrapper">Control spending and manage your accounts</p>
      <div class="text-wrapper-2">See your insights</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({ name: "DashboardCTA" });
</script>
<style scoped>
.frame {
  align-items: center;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #e5e5e5;
  border-radius: 10px;
  display: flex;
  gap: 8px;
  padding: 12px;
  position: relative;
}
.frame .casual-life-girl {
  height: 64px;
  object-fit: cover;
  position: relative;
  width: 88px;
}
.frame .div {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  position: relative;
}
.frame .text-wrapper {
  color: #0a0a0a;
  font-family: "Inter-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: 208px;
}
.frame .text-wrapper-2 {
  color: #a3a3a3;
  font-family: "Inter-Medium", Helvetica;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}
</style>
