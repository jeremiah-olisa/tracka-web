<script lang="ts" setup>
import routes from "~/lib/constants/routes";

definePageMeta({
  showTopHeader: true,
  name: "Login",
  pageTitle: "Login",
});

const showPassword = ref(false);

const { onSubmit } = useLoginForm();
</script>

<template>
  <form @click="onSubmit" class="flex flex-col gap-8">
    <div class="flex flex-col gap-3 mt-10">
      <h3 class="auth-header-text">Welcome back</h3>
      <p class="text-base leading-normal">
        Hey you're back, fill in your details to get back in
      </p>
    </div>
    <div class="flex flex-col gap-8">
      <div class="grid w-full items-center gap-2">
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel for="email">Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Email" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
      <div class="grid w-full items-center gap-2">
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel for="password">Password</FormLabel>
            <FormControl>
              <Input
                :type="showPassword ? 'text' : 'password'"
                placeholder="Password"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
            <div class="flex flex-row-reverse">
              <Label
                @click="() => (showPassword = !showPassword)"
                class="text-xs"
                :class="{ 'text-red-400': !showPassword }"
                >{{ showPassword ? "Hide Password" : "Show Password" }}</Label
              >
            </div>
          </FormItem>
        </FormField>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <Checkbox id="rememberMe" />
        <Label
          for="rememberMe"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Remember me
        </Label>
      </div>
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

<style scoped>
.auth-header-text {
  @apply text-2xl text-header font-bold font-[Inter];
  font-style: normal;
}
</style>
