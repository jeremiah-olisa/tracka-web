import routes from "./lib/constants/routes";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/supabase",
    "@hebilicious/vue-query-nuxt",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  devtools: { enabled: true },
  ssr: false,
  spaLoadingTemplate: "spa-loading-template.html",
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  supabase: {
    redirectOptions: {
      login: "/auth/login",
      callback: "/auth/confirm",
      exclude: [`${routes.auth}/*`, `${routes.onboarding}/*`],
      cookieRedirect: false,
    },
  },
  runtimeConfig: {
    public: { MONO_PK: process.env.NUXT_ENV_MONO_PK },
  },
});
