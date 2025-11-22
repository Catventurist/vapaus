export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxtjs/i18n'
  ],

  devtools: {
    enabled: false
  },

  css: ['~/assets/css/main.css'],

  ui: {
    experimental: {
      componentDetection: true
    }
  },

  routeRules: {
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  experimental: {
    scanPageMeta: true
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  telemetry: false,

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    families: [
      { name: 'Finlandica', provider: 'bunny' },
      { name: 'Arima Madurai', provider: 'bunny' },
      { name: 'Chivo Mono', provider: 'bunny' },
      { name: 'Caveat', provider: 'bunny' }
    ]
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.yml', icon: 'cat:usa', dir: 'ltr', currency: 'USD' },
      { code: 'fi', name: 'Suomi', file: 'fi.yml', icon: 'cat:finland', dir: 'ltr', currency: 'EUR' }
    ],
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true
    }
  },

  icon: {
    customCollections: [{
      prefix: 'cat',
      dir: './app/assets/icons'
    }],
    clientBundle: {
      scan: true,
      includeCustomCollections: true
    }
  }
})
