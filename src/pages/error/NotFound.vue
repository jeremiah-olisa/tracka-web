<template>
  <ErrorLayout
    :errorImage="error.image"
    :error="error.message"
    :errorDescription="error.description"
  />
</template>

<script lang="ts">
import ErrorLayout from "./../../layout/ErrorLayout.vue";

export default {
  components: {
    ErrorLayout,
  },
  data() {
    return {
      error: {
        image: 'https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=1060&t=st=1703589587~exp=1703590187~hmac=1754620742e3d1eb966e185bf3ed3db134a0fe0e6cc02a9fe7513bd542c7fe36',
        message: "Page Not Found",
        description: `Page '${this.$route.path}' was not found.`,
      },
    };
  },
};
</script>