import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: true,
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  future: {
    compatibilityVersion: 4,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxtjs/seo',
    '@nuxt/fonts',
    '@nuxt/image'
  ],
  site: {
    url: 'https://serene.ws',
    name: 'CV Gen',
    description: 'AI-Powered Professional Presence Platform',
    defaultLocale: 'en'
  },
  ogImage: {
    enabled: false
  }
});