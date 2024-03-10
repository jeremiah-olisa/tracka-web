<script lang="ts" setup>
import routes from "~/lib/constants/routes";

definePageMeta({ showTopHeader: true, name: "Forgot Password" });

const { onSubmit, formFields } = useForgotPasswordForm();
</script>

<template>
  <form @click="onSubmit" class="flex flex-col gap-8">
    <div class="flex flex-col gap-3 mt-10">
      <h3 class="auth-header-text">
        Enter your email and we’ll send you a link to reset your password.
      </h3>
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
          </div>
        </FormItem>
      </FormField>
    </div>
    <Button type="submit" class="w-full">Continue</Button>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Remembered password?
      <NuxtLink
        :href="routes.login"
        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >Sign in</NuxtLink
      >
    </p>
  </form>
</template>
