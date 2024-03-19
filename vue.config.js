const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/PostsList/" : "/",
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/globals.scss";',
      },
    },
  },
});
