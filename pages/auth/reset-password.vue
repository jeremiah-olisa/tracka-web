<script lang="ts" setup>
import routes from "~/lib/constants/routes";

definePageMeta({ showTopHeader: true, name: "Reset Password" });

const { onSubmit, formFields, toggleShowPassword, showPassword } =
  useResetPasswordForm();
</script>

<template>
  <form
    @click="onSubmit"
    class="flex flex-col gap-5 h-[calc(100vh-60px)] justify-center"
  >
    <IconLock />
    <div class="flex flex-col gap-3 mt-10">
      <h3 class="auth-header-text">Set your password</h3>
      <p class="text-base leading-normal">
        Please create your new account password for MonieTracka
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
            <div v-if="field.name == 'confirmPassword'" class="ml-auto">
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
