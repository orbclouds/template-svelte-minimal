/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  devOptions: {
    port: 3000,
  },
  buildOptions: {
    sourcemap: false,
    clean: true,
  },
  exclude: [
    '**/.*',
    '**/LICENSE',
    '**/yarn.lock',
    '**/README.md',
    '**/package.json',
    '**/yarn-error.log',
    '**/package-lock.json',
  ],
  alias: {
    '@app': './src',
  },
  mount: {
    public: {
      url: '/',
    },
    src: {
      url: '/dist',
    },
  },
  routes: [
      {
          src: '.*',
          match: 'routes',
          dest: '/index.html',
      },
  ],
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-typescript',
    [
      '@snowpack/plugin-webpack',
      {
        sourceMap: false,
      },
    ],
  ],
};
