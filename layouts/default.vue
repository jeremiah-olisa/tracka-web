<template>
  <Title>{{ $route.name }}</Title>
  <div class="flex h-screen justify-center" :class="$route.meta.backgroundClass">
    <div class="app-container">
      <div class="flex flex-col p-5">
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
        <nav v-if="$route.meta.showBottomNavigation">Buttom Nav</nav>
      </div>
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
