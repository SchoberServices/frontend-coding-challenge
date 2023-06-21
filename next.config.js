/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    storyblokApiToken: "7FmwGeMV2rQLGkGafUByDAtt",
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.storyblok.com",
      },
    ],
  },
};

module.exports = nextConfig
