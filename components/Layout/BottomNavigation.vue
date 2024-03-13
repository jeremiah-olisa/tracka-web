<script setup lang="ts">
import { BarChart2, Home, PieChart, User } from "lucide-vue-next";
import routes from "~/lib/constants/routes";

const menuItems = [
  { icon: Home, link: routes.home, name: "Home" },
  { icon: PieChart, link: routes.budget, name: "Budget" },
  { icon: BarChart2, name: "Insights" },
  { icon: User, link: routes.login, name: "Settings" },
];

const { breakValue: iconSize } = useMediaQuery({
  xs: 18,
  sm: 20,
  md: 24,
  lg: 24,
  xl: 24,
});
</script>

<template>
  <nav
    v-if="$route.meta.showBottomNavigation"
    class="px-7 shadow-lg rounded-2xl z-50 fixed bottom-0 w-full"
    :class="$route.meta.bottomNavBackgroundClass ?? $route.meta.backgroundClass"
  >
    <div class="flex">
      <div v-for="menuItem in menuItems" class="flex-1 group">
        <NuxtLink
          :href="menuItem.link"
          :disabled="!menuItem.link"
          class="flex items-end justify-center text-center mx-auto px-2 md:px-4 pt-2 w-full group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
        >
          <span class="flex flex-col items-center px-1 pt-1 pb-2">
            <component
              :is="menuItem.icon"
              :size="iconSize"
              class="text-2xl pt-1 mb-1 block"
            />
            <span
              v-if="menuItem.name"
              class="block text-[12px] md:text-xs lg:text-sm pb-1"
              >{{ menuItem.name }}</span
            >
          </span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
