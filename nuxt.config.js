import Sass from 'sass';
import Fiber from 'fibers';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  srcDir: 'src',
  mode: 'universal',
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'ja-jp',
    },
    titleTemplate: (title) => (title ? `${title} - あもんポートフォリオ` : 'あもんポートフォリオ'),
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'さわむらあもんのポートフォリオ' },
      { hid: 'robots', name: 'robots', content: 'noindex' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'あもんポートフォリオ' },
      { hid: 'og:description', property: 'og:description', content: 'さわむらあもんのポートフォリオ' },
      { hid: 'og:url', property: 'og:url', content: 'https://portfolio.amon.house' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'あもんポートフォリオ' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `https://i.imgg.app/amon/amon-house/jpg?title=%E3%81%82%E3%82%82%E3%82%93%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA`,
      },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@amotarao' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@amotarao' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', href: '/icon-192.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap',
      },
    ],
  },
  css: ['./src/assets/scss/global.scss'],
  plugins: [],
  components: [
    '~/components',
    { path: '~/components/icons/', prefix: 'icon' },
    { path: '~/components/for-content/', global: true },
  ],
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module', '@nuxtjs/style-resources'],
  modules: ['@nuxtjs/pwa', '@nuxt/content'],
  styleResources: {
    scss: ['./src/assets/scss/_variables.scss', './src/assets/scss/_mixins.scss'],
  },
  pwa: {
    meta: {
      name: 'あもんポートフォリオ',
      description: 'さわむらあもんのポートフォリオ',
      lang: 'ja',
    },
    manifest: {
      name: 'あもんポートフォリオ',
      short_name: 'あもポ',
      description: 'さわむらあもんのポートフォリオ',
      lang: 'ja',
      start_url: '/?ref=pwa',
      theme_color: '#666666',
    },
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
