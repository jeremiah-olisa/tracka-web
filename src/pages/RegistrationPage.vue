<template>
  <slot>
    <Form @submit="onSubmit" :validation-schema="registerValidationSchema">
      <div class="mb-4">
        <label for="fullName" class="block text-gray-700 text-sm font-bold mb-2"
          >Full Name</label
        >
        <Field
          name="fullName"
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
          placeholder="Enter your name"
          required
        />
        <ErrorMessage name="fullName" class="text-red-500 text-sm mt-1" />
      </div>
      
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
          >Email</label
        >
        <Field
          name="email"
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
          required
        />
        <ErrorMessage name="email" class="text-red-500 text-sm mt-1" />
      </div>

      <div class="mb-6">
        <label for="pin" class="block text-gray-700 text-sm font-bold mb-2"
          >Pin</label
        >
        <Field
          type="password"
          id="pin"
          name="pin"
          inputmode="numeric"
          pattern="[0-9]*"
          min="99999"
          max="999999"
          style="-webkit-text-security: disc"
          autofocus
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
          placeholder="Enter your PIN"
          required
        />
        <ErrorMessage name="pin" class="text-red-500 text-sm mt-1" />
      </div>

      <!-- Login Button -->
      <button
        type="submit"
        class="bg-tracka-main w-full text-white px-4 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:shadow-outline"
      >
        Register
      </button>
    </Form>
  </slot>

  <slot name="meta">
    <!-- Meta Information -->
    Registered Already?
    <router-link class="text-blue-600" to="/auth/login">Login</router-link> now
  </slot>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import { registerValidationSchema } from "./../_utils/validations/auth.validation";
import { createUser } from "./../_utils/lib/authentication";
import { useRouter } from "vue-router";
import { RouteNames } from "../_utils/routes";

const router = useRouter();
const onSubmit = async (values: Record<string, any>) => {
  const response = await createUser(values?.email, values?.pin, values?.fullName);

  if (response.data) router.push({ name: RouteNames.Login });
};
</script>
