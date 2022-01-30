import { resolve } from 'pathe'
import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  dir: {
    pages: resolve(__dirname, 'pages/_noop'),
  },
  hooks: {
    'pages:extend': (pages: any[]) => {
      pages.push({
        name: 'homepage',
        path: '',
        file: resolve(__dirname, 'pages/homepage.vue'),
      })
      pages.push({
        name: 'wildcard',
        path: '/:url(.*)*',
        file: resolve(__dirname, 'pages/wildcard.vue'),
      })
    },
  },
})
