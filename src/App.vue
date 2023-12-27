<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/splash">Splash</router-link>
  </div> -->
  <component :is="$route?.meta?.layout || 'div'">
    <router-view />
  </component>
</template>

<script lang="ts">
import { RouteNames } from "./_utils/routes";
import supabase from "./_utils/lib/supabase";
import store from "./_utils/lib/store";

export default {
  mounted() {
    supabase.auth.getSession().then(({ data }) => {
      data?.session && store.setSession(data?.session);
      !data?.session && store.resetSession();
      console.log({ data });
    });

    supabase.auth.onAuthStateChange((_, _session) => {
      _session && store.setSession(_session);
      _ == 'SIGNED_OUT' && store.resetSession();
    });

    // Check if it's the first visit
    const isFirstVisit = !localStorage.getItem("visited");

    // Show the splash screen and mark the visit
    if (isFirstVisit)
      this.$router.push({ name: RouteNames.Splash, replace: true });
  },
};
</script>
