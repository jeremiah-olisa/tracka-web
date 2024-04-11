<script lang="ts" setup>
import routes from "~/lib/constants/routes";

definePageMeta({ showTopHeader: true, name: "Register" });

const { onSubmit, formFields, showPassword, isLoading, toggleShowPassword } =
  useRegisterForm();
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-8">
    <div class="flex flex-col gap-3 mt-10">
      <h3 class="auth-header-text">Welcome to MonieTracka</h3>
      <p class="text-base leading-normal">
        Complete the sign up to get started and get daily insights on your
        spending 📊
      </p>
    </div>
    <div class="flex flex-col gap-3">
      <FormField
        v-for="field in formFields"
        :key="field.key"
        v-slot="{ componentField }"
        :name="field.key"
      >
        <CustomFormWizard
          :field="field"
          :componentField="componentField"
          :showPassword="showPassword"
          :toggleShowPassword="toggleShowPassword"
        />
      </FormField>
    </div>
    <Button type="submit" :loading="isLoading" class="w-full">Register</Button>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Have an account?
      <NuxtLink
        :href="routes.login"
        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >Sign in</NuxtLink
      >
    </p>
  </form>
</template>
