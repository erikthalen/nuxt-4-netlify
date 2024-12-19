// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: '8u4j3tvd',
    dataset: 'production-en',
    apiVersion: '2024-03-15'
  }
})
