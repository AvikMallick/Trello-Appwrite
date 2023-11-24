/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'links.papareact.com',
      },
    ],
  },
};

module.exports = nextConfig;
