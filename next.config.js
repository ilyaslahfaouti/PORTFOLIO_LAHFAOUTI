/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/PORTFOLIO",
  assetPrefix: "/PORTFOLIO/",
  experimental: {
    serverActions: false,
  },
};

module.exports = nextConfig;
