const webpack = require("webpack");

module.exports = {
  filenameHashing: false,
  css: {
    extract: false
  },
  configureWebpack: {
    plugins: [new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })],
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex"
    }
  }
};
