// vue.config.js
module.exports = {
  publicPath: '/MARCA-Practica/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/_fonts.sass"; @import "@/assets/_colors.sass";'
      },
      sass: {
        additionalData: '@import "@/assets/_fonts.sass"\n@import "@/assets/_colors.sass"'
      }
    }
  }
}
