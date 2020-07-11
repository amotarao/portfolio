import Sass from 'sass';
import Fiber from 'fibers';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  srcDir: 'src',
  mode: 'universal',
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap',
      },
    ],
  },
  css: ['./src/assets/scss/global.scss'],
  plugins: [],
  components: ['~/components', { path: '~/components/icons/', prefix: 'icon' }],
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module', '@nuxtjs/style-resources'],
  modules: ['@nuxtjs/pwa', '@nuxt/content'],
  styleResources: {
    scss: ['./src/assets/scss/_variables.scss', './src/assets/scss/_mixins.scss'],
  },
  content: {},
  build: {
    loaders: {
      cssModules: {
        modules: {
          localIdentName: isProduction ? '[hash:base64:5]' : '[name]_[local]_[hash:base64:5]',
        },
      },
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
  },
};
