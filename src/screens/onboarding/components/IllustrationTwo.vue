<template>
  <img src="./../../../assets/onboarding-illustrations-2.png" :width="width" :height="height" alt="onboarding-illustrations-2">
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IllustrationTwo',
  components: {},
  props: {
    width: {
      type: String || Number,
      default: '277'
    },
    height: {
      type: String || Number,
      default: '356'
    }
  }
})
</script>
