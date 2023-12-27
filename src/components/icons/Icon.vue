<template>
  <div class="relative" :style="{ color, width, height }">
    <img class="absolute w-full h-full" :src="icon" :alt="iconName" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Icon",
  props: {
    icon: {
      type: String as PropType<string>,
      required: true,
    },
    iconName: {
      type: String as PropType<string>,
      default: "Icon",
    },
    color: {
      type: String as PropType<string>,
    },
    width: {
      type: [String, Number] as PropType<string | number>,
      default: "14px", // Default size
    },
    height: {
      type: [String, Number] as PropType<string | number>,
      default: "14px", // Default size
    },
  },
});
</script>
