<template>
  <div class="flex items-center justify-center h-screen flex-col zz">
    <!-- Error Image -->
    <img :src="errorImage" alt="Error Image" class="mb-4" width="500" />

    <!-- Error Message -->
    <div class="text-red-500 text-2xl font-bold mb-2">
      {{ error ?? "Oops! Something went wrong." }}
    </div>

    <!-- Muted Description -->
    <div class="text-gray-500 text-sm mb-8">
      {{
        errorDescription ??
        "We apologize for the inconvenience. Please try again later."
      }}
    </div>

    <!-- Navigation Button -->
    <button
      @click="navigate"
      class="bg-blue-500 text-white px-4 py-1 rounded-md"
    >
      {{ hasHistory ? "Go Back" : "Go Home" }}
    </button>

    <!-- Additional Content or Action Buttons can be added here -->
  </div>
</template>

<script lang="ts">
import { RouteNames } from "./../_utils/routes.ts";
export default {
  props: {
    errorImage: { type: String, required: true },
    error: { type: String, required: true },
    errorDescription: { type: String, required: true },
  },
  data() {
    return {
      hasHistory: false,
    };
  },
  mounted() {
    hasHistory = hasHistory();
  },
  methods: {
    hasHistory() {
      return this.$router && this.$router.history.length > 1;
    },
    navigate() {
      if (this.hasHistory()) {
        // Go back in the browser history
        this.$router.go(-1);
      } else {
        // Navigate to the home page or another default route
        this.$router.push({ name: RouteNames.Home }); // Replace "home" with your default route name
      }
    },
  },
};
</script>
