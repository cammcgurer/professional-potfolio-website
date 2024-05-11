/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  basePath: "/professional-potfolio-website"
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;
