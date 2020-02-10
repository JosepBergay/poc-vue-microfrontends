const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
    }
  }
};
