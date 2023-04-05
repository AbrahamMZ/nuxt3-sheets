// https://nuxt.com/docs/api/configuration/nuxt-config
// import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
      SPREAD_SHEET_ID: process.env.SPREAD_SHEET_ID,
    },
  },

  buildModules: [
    // Simple usage
    "@nuxtjs/vuetify",

    // With options
    [
      "@nuxtjs/vuetify",
      {
        /* module options */
      },
    ],
  ],
});
