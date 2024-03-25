/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        // add remote patterns here
        hostname: 'cdn.dummyjson.com'
      }
    ]
  }
};

// add plugins
module.exports = (_phase, { defaultConfig }) => {
  const plugins = [];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
