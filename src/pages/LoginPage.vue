<template>
  <slot>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
          >Email</label
        >
        <input
          type="email"
          id="email"
          v-model="email"
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="mb-6">
        <label for="pin" class="block text-gray-700 text-sm font-bold mb-2"
          >PIN</label
        >
        <input
          type="password"
          id="pin"
          inputmode="numeric"
          pattern="[0-9]*"
          min="1111"
          max="9999"
          style="-webkit-text-security: disc"
          autofocus
          v-model="pin"
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
          placeholder="Enter your PIN"
          required
        />
      </div>

      <!-- Login Button -->
      <button
        type="submit"
        class="bg-tracka-main w-full text-white px-4 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:shadow-outline"
      >
        Login
      </button>
    </form>
  </slot>

  <slot name="meta">
    <!-- Meta Information -->
    <div class="mt-4 text-sm text-gray-600">
      <!-- Add any additional information or links here -->
      Don't have an account?
      <router-link class="text-blue-600" to="/auth/register">Register</router-link> now
    </div>
  </slot>
</template>

<script lang="ts">
import { RouteNames } from "../_utils/routes";

export default {
  data() {
    return {
      email: "",
      pin: "",
    };
  },
  methods: {
    login() {
      // Add your login logic here
      console.log("Logging in with:", this.email, this.pin);
      this.$router.push({ name: RouteNames.Home });
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
