/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// add plugins
module.exports = (_phase, { defaultConfig }) => {
  const plugins = [];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};