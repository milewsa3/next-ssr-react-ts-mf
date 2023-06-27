/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          remotes: {
            remote: 'remote@http://localhost:3001/remote.js',
          },
          filename: 'static/chunks/remoteEntry.js',
        }),
      );
    }

    return config;
  },
};

module.exports = nextConfig
