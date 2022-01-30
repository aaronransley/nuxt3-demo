import { resolve } from 'pathe'
import { NuxtPage } from '@nuxt/schema/dist/index'

import { defineNuxtConfig } from 'nuxt3'
import homepageVue from '~/pages/homepage.vue'
import wildcardVue from '~/pages/wildcard.vue'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  dir: {
    pages: 'pages/_noop',
  },
  hooks: {
    'pages:extend': (pages: any[]) => {
      pages.push({
        name: 'homepage',
        path: '',
        component: homepageVue,
      })
      pages.push({
        name: 'wildcard',
        path: '/:url(.*)*',
        component: wildcardVue,
      })
    },
  },
})
