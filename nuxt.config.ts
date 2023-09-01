// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vee-validate/nuxt', 'nuxt-icon', '@pinia/nuxt'],
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Радонсарк',
      meta: [
        {name: 'description', content: 'Social of Shatailov Alexandr'}
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  plugins: [
    // Подключаем плагин для VeeValidate
    { src: '~/plugins/vee-validate.js' }
  ],
  components: [
    { path: '~/app/UI', pathPrefix: false },
    { path: '~/app/Notification', pathPrefix: false },
    { path: '~/components/profile', pathPrefix: false}
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  runtimeConfig: {
    baseURL: process.env.BASE_URL
  }
})
