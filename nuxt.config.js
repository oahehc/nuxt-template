module.exports = {
  head: { // Headers of the page
    titleTemplate: '%s | Nuxt',
    title: 'nuxt',
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        hid: 'description',
        name: 'description',
        content: 'nuxt study'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  css: ['~assets/styles/main.scss'],
  loading: {
    color: '#3B8070'
  }, // Customize the progress bar color
  build: {
    extend(config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        //  Run ESLint on save
        config
          .module
          .rules
          .push({ enforce: 'pre', test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /(node_modules)/ })
      }
      if (isDev) {
        config.devtool = 'eval-source-map'
      }
    },
    babel: {
      presets: [
        'es2015', 'stage-0'
      ],
      plugins: ['transform-runtime']
    },
    extractCSS: true,
    postcss: [require('autoprefixer')({ browsers: ['> 5%'] })],
    vendor: ['axios', 'babel-polyfill', 'vue-i18n']
  },
  plugins: ['~/plugins/i18n.js'], // apply vue plugin
  router: {
    middleware: 'i18n' // run before rendering
  },
  serverMiddleware: ['~/api/logger']
}
