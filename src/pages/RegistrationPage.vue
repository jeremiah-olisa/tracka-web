<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <!-- Screen Title -->
        <h2 class="text-2xl font-semibold mb-6 text-center text-tracka-main">
          Register
        </h2>
  
        <!-- Logo -->
        <div class="flex justify-center mb-6">
          <img
            src="/images/word-mark-logo-dark.svg"
            alt="Your Logo"
            class="w-7/12"
          />
        </div>
  
        <!-- Login Fields -->
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
              pattern="[0-9]*"
              inputmode="numeric"
              min="1111" max="9999" style="-webkit-text-security: disc;" autofocus 
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
            Register
          </button>
        </form>
  
        <!-- Meta Information -->
        <div class="mt-4 text-sm text-gray-600">
          <!-- Add any additional information or links here -->
          Registered Already? <router-link to="/auth/login">Login</router-link> now
        </div>
      </div>
    </div>
  </template>
  
  <script>
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
        // You can use this.$router.push() to navigate after successful login
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  