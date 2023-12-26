<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="bg-white p-8 shadow-md rounded-md w-full max-w-md">
      <!-- Logo -->
      <div class="flex justify-center mb-6">
        <img
          src="/images/word-mark-logo-dark.svg"
          alt="Your Logo"
          class="w-7/12"
        />
      </div>

      <!-- Form Content -->
      <slot></slot>

      <!-- Meta Information -->
      <div class="mt-4 text-sm text-gray-600">
        <!-- Add any additional information or links here -->
        <slot name="meta"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
