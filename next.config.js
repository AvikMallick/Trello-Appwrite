/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'links.papareact.com',
      },
      {
        hostname: 'cloud.appwrite.io',
      },
    ],
  },
};

module.exports = nextConfig;
