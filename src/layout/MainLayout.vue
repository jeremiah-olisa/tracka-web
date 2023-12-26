<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app :elevation="0" color="#2C457B">
      <v-toolbar-title class="ml-6">TRACKA</v-toolbar-title>
    </v-app-bar>

    <!-- Drawer -->
    <v-navigation-drawer app v-model="drawer">
      <!-- Drawer Content -->
      <v-list>
        <!-- Your drawer content goes here -->
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <!-- Body Content -->
      <slot></slot>
    </v-main>

    <!-- Bottom Navigation -->
    <v-bottom-navigation :elevation="0">
      <v-btn value="home">
        <font-awesome-icon icon="fa-home" size="xl" />
      </v-btn>
      <v-btn value="chart-bar">
        <font-awesome-icon icon="fa-chart-bar" size="xl" />
      </v-btn>
      <v-btn value="add">
        <font-awesome-icon icon="fa-add" size="xl" />
      </v-btn>
      <v-btn value="bell">
        <font-awesome-icon icon="fa-bell" size="xl" />
      </v-btn>
      <v-btn value="cog">
        <font-awesome-icon icon="fa-cog" size="xl" />
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
  methods: {
    onTabChange(index) {},
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
