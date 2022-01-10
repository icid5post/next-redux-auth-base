// next.config.js
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({

  lessVarsFilePath: './styles/theme.less', // optional
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {

  },

  // Other Config Here...

  webpack(config) {
    return config;
  },

});