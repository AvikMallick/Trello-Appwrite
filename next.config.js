/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'links.papareact.com',
      },
    ],
  },
};

module.exports = nextConfig;
