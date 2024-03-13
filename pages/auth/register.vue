<script lang="ts" setup>
import routes from "~/lib/constants/routes";

definePageMeta({ showTopHeader: true, name: "Register" });

const { onSubmit, formFields, showPassword, toggleShowPassword } =
  useRegisterForm();
</script>

<template>
  <form @submit="onSubmit" class="flex flex-col gap-8">
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
        :key="field.name"
        v-slot="{ componentField }"
        :name="field.name"
      >
        <FormItem>
          <FormLabel :for="field.name">{{ field.label }}</FormLabel>
          <FormControl>
            <Input
              :type="field.type"
              :placeholder="field.placeholder"
              v-bind="componentField"
            />
          </FormControl>
          <div class="flex items-center justify-between">
            <FormMessage />
            <div v-if="field.name == 'password'" class="ml-auto">
              <Label
                @click="toggleShowPassword"
                class="text-xs"
                :class="{ 'text-red-400': !showPassword }"
              >
                {{ showPassword ? "Hide Password" : "Show Password" }}
              </Label>
            </div>
          </div>
        </FormItem>
      </FormField>
    </div>
    <Button type="submit" class="w-full">Register</Button>
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
