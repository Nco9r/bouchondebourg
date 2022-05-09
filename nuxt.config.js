export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Restaurant d'appellation Côtes de Bourg | Le Bouchon de Bourg ",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Restaurant d'appellation Côtes de Bourg à la cuisine généreuse, authentique et de partage. L’expression de nos terroirs, d’hommes passionnés et de leur savoir-faire. Profitez de votre passage chez nous pour découvrir l’histoire du vignoble des Côtes de Bourg et de tous ses vignerons.",
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Restaurant, Restaurant côtes de bourg, bar à vin, bar à vin côtes de bourg, restaurant bourg, bar à vin bourg, guinguette côtes de bourg, cuisine, vignerons, guinguette',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-tiny-slider.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
