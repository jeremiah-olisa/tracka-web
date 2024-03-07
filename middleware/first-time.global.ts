import { Onboarding } from "./../.nuxt/components.d";
import { useLocalStorage } from "@vueuse/core";
import routes from "~/lib/constants/routes";

export default defineNuxtRouteMiddleware((to, from) => {
  const onboardedAt = useLocalStorage<number | undefined>(
    "onboardedAt",
    undefined,
  );
  const isFirstTime = onboardedAt.value == undefined;
  const isOnboardingScreen = to.path == routes.onboarding;

  if (isFirstTime && !isOnboardingScreen)
    return navigateTo(routes.onboarding, { redirectCode: 301 });
});
