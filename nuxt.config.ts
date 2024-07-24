export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: [
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt"
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  primevue: {
    options: {
      ripple: true,
      cssLayer: {
        name: "primevue",
        order: "primevue, tailwind-base, tailwind-utilities",
      },
    },
    importTheme: { from: "@/themes/theme.ts" },
  },
  css: [
    '~/assets/scss/main.scss',
    "@mdi/font/css/materialdesignicons.css"
  ]
});
