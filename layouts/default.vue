<template>
  <Title>{{ $route.name }}</Title>
  <div
    class="flex h-screen justify-center overflow-y-auto px-5"
    :class="$route.meta.backgroundClass"
  >
    <div class="app-container flex flex-col mt-5">
      <LayoutHeader v-if="$route.meta.showTopHeader" />
      <slot />
    </div>
    <LayoutBottomNavigation v-if="$route.meta.showBottomNavigation" />
  </div>
</template>
