<script lang="ts" setup>
import routes from "~/lib/constants/routes";

definePageMeta({ showTopHeader: true, name: "Login" });

const { onSubmit, formFields, showPassword, toggleShowPassword } =
  useLoginForm();
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-8">
    <div class="flex flex-col gap-3 mt-10">
      <h3 class="auth-header-text">Welcome back</h3>
      <p class="text-base leading-normal">
        Hey you're back, fill in your details to get back in
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
    <div class="flex items-center justify-end">
      <!-- <div class="flex items-center space-x-2">
        <Checkbox id="rememberMe" />
        <Label
          for="rememberMe"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Remember me
        </Label>
      </div> -->
      <NuxtLink
        :href="routes.forgotPassword"
        class="text-sm font-medium text-primary-600 hover:underline border-pri dark:text-primary-500"
        >Forgot password?</NuxtLink
      >
    </div>
    <Button type="submit" class="w-full">Login</Button>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Don’t have an account yet?
      <NuxtLink
        :href="routes.register"
        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >Sign up</NuxtLink
      >
    </p>
  </form>
</template>
