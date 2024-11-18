export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
      port: 9876,
      host: '0.0.0.0',
  },
  typescript: {
    typeCheck: true
  },
  modules: [ 
      'nuxt-icons', 
      "@nuxt/image", 
      [
          '@pinia/nuxt',
          {
              autoImports: ['defineStore', 'acceptHMRUpdate'],
          }
      ],
  ],

  css: ['~/assets/css/style.css','~/assets/css/fonts.css'],

  image:{
      dir:'assets/img'
  },

  imports: {
      dirs: ['./stores'],
  }
})