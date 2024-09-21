const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  filenameHashing: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/style.scss";
        `
      }
    }
  },
  transpileDependencies: true
})
