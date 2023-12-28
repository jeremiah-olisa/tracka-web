<template>
  <img src="./../../../assets/onboarding-illustrations-3.png" :width="width" :height="height" alt="onboarding-illustrations-3">
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IllustrationThree',
  components: {},
  props: {
    width: {
      type: String || Number,
      default: '374'
    },
    height: {
      type: String || Number,
      default: '356'
    }
  }
})
</script>
