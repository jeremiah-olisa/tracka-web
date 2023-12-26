<template>
 <slot>
  <!-- Login Fields -->
  <form @submit.prevent="register">
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
        pattern="[0-9]*"
        inputmode="numeric"
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

    <!-- Register Button -->
    <button
      type="submit"
      class="bg-tracka-main w-full text-white px-4 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:shadow-outline"
    >
      Register
    </button>
  </form>
 </slot>

  <slot name="meta">
    <!-- Meta Information -->
    Registered Already? <router-link class="text-blue-600" to="/auth/login">Login</router-link> now
  </slot>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: "",
      pin: "",
    };
  },
  methods: {
    register() {
      // Add your registration logic here
      console.log("Registering with:", this.email, this.pin);
      // You can use this.$router.push() to navigate after successful registration
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
