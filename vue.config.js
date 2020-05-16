const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: [
          '/',
          '/projects/oidc-server',
          '/projects/neojax',
          '/projects/key-redeem-feedback',
          '/projects/components-library',
          '/projects/core-library',
          '/projects/portfolio',
          '/projects/dashboard',
          '/projects/neruxvace-chatlog',
          '/projects/neruxvace-redeem',
          '/projects/html-2-pdf',
          '/projects/fullstack-template',
          '/projects/chat-moderation',
          '/open-source/vue-moveable',
          '/open-source/linux-mint-cinnamon',
        ],
      }),
    ],
  },
};
