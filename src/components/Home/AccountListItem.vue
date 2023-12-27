<template>
  <div class="frame">
    <div class="div">
      <img
        class="cib-logo"
        alt="Cib logo"
        src="data:image/jpeg;base64,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"
      />
      <div class="div-2">
        <div class="text-wrapper">Wael Ahmed</div>
        <div class="text-wrapper-2">CIB - Saving</div>
      </div>
    </div>
    <div class="div">
      <div class="text-wrapper">NGN 23,563.20</div>
      <Icon icon="/icons/outline-chevron-right.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icon from "../icons/Icon.vue";

export default defineComponent({
  name: "AccountListItem",
  components: {
    Icon,
  },
});
</script>

<style scoped>
.frame {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 4px 16px;
  position: relative;
}

.frame .div {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
}

.frame .cib-logo {
  height: 16.19px;
  position: relative;
  width: 40px;
}

.frame .div-2 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 2px;
  position: relative;
}

.frame .text-wrapper {
  color: #0a0a0a;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.frame .text-wrapper-2 {
  color: #737373;
  font-family: "Inter-Medium", Helvetica;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.frame .icon-outline-chevron {
  height: 14px !important;
  position: relative !important;
  width: 14px !important;
}
</style>
