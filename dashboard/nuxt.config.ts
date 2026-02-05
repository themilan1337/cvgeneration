import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    'shadcn-nuxt'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      ignore: ['**/*.ts'] // Exclude index.ts files to prevent duplicate component registration
    }
  ],
  shadcn: {
    prefix: '',
    componentDir: 'app/components/ui',
  },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})