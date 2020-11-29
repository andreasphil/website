/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    _site: '/',
    src: '/static',
  },
  plugins: [
    ['@snowpack/plugin-run-script', { cmd: 'eleventy', watch: '$1 --watch' }],
  ],
  install: [],
  installOptions: {},
  devOptions: {
    hmrDelay: 300, // give 11ty some time to finish
    open: "none"
  },
  buildOptions: {},
  proxy: {},
  alias: {},
};
