<template>
  <div class="icon-outline-bell">
    <div class="overlap-group">
      <div class="ellipse"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconOutlineBell",
});
</script>

<style>
.icon-outline-bell .overlap-group {
  background-image: url(/icons/bell-icon.svg);
  background-size: 100% 100%;
  height: 30px;
  left: 3px;
  position: relative;
  top: 2px;
  width: 25px;
}

.icon-outline-bell .ellipse {
  background-color: #ff3b3b;
  border-radius: 4px;
  height: 8px;
  left: 13px;
  position: relative;
  width: 8px;
  top: 3px;
}
</style>
