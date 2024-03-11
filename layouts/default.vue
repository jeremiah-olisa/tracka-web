<script setup lang="ts">
import { BarChart2, Home, PieChart, User } from "lucide-vue-next";
import routes from "~/lib/constants/routes";

const menuItems = [
  { icon: Home, link: routes.home, name: "Home" },
  { icon: PieChart, name: "Budget" },
  { icon: BarChart2, name: 'Insights' },
  { icon: User, name: "Settings" },
];
</script>
<template>
  <Title>{{ $route.name }}</Title>
  <div
    class="flex h-screen justify-center"
    :class="$route.meta.backgroundClass"
  >
    <div class="app-container flex flex-col p-5">
      <header
        class="flex items-center justify-center"
        v-if="$route.meta.showTopHeader"
      >
        <div>
          <Button size="sm" class="rounded-full bg-white">
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.84506 7.00006L8.33321 12.4882C8.65865 12.8137 8.65865 13.3413 8.33321 13.6667C8.00778 13.9922 7.48014 13.9922 7.1547 13.6667L0.488037 7.00006L7.1547 0.333397C7.48014 0.00795978 8.00778 0.00795922 8.33321 0.333396C8.65865 0.658833 8.65865 1.18647 8.33321 1.51191L2.84506 7.00006Z"
                fill="#131313"
              />
            </svg>
          </Button>
        </div>
        <div class="page-title">
          {{ $route.meta.pageTitle ?? $route.meta.name }}
        </div>
      </header>
      <main>
        <slot />
      </main>
      <nav
        v-if="$route.meta.showBottomNavigation"
        class="px-7 bg-primary shadow-lg rounded-2xl z-50 mt-auto"
      >
        <div class="flex">
          <div v-for="menuItem in menuItems" class="flex-1 group">
            <NuxtLink
              :href="menuItem.link"
              :disabled="!menuItem.link"
              class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-100 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
            >
              <span class="flex flex-col items-center px-1 pt-1 pb-2">
                <component
                  :is="menuItem.icon"
                  class="text-2xl pt-1 mb-1 block"
                />
                <span v-if="menuItem.name" class="block text-xs pb-1">{{
                  menuItem.name
                }}</span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.page-title {
  @apply font-[Inter] text-lg font-medium flex-grow;
  font-style: normal;
  line-height: 20px;
  text-align: center;
  color: #131313;
}
</style>
