<template>
  <div class="frame mt-4">
    <div class="div">
      <div class="icon-outline-arrow">
        <Icon icon="/icons/arrow-circle-right.svg" />
      </div>
      <div class="div-2">
        <div class="text-wrapper">Sent Cash</div>
        <div class="text-wrapper-2">11:45 am</div>
      </div>
    </div>
    <div class="text-wrapper-3">EGP 1,350</div>
  </div>
</template>
<script lang="ts">
import Icon from "../icons/Icon.vue";
import { defineComponent } from "vue";
export default defineComponent({ name: "Frame", components: { Icon } });
</script>
<style scoped>
.frame {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.frame .div {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
}
.frame .icon-outline-arrow {
  align-items: center;
  background-color: #eef0ff;
  border-radius: 23px;
  display: flex;
  gap: 10px;
  height: 34px;
  justify-content: center;
  overflow: hidden;
  padding: 2px;
  position: relative;
  width: 34px;
}
.frame .icon {
  height: 22.63px;
  position: relative;
  width: 22.63px;
}
.frame .div-2 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 4px;
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
.frame .text-wrapper-2 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}
.frame .text-wrapper-3 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}
</style>
