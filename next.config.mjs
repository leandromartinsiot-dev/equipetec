/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '69d0f7f51362132535da4311.imgix.net',
      },
    ],
  },
};

export default nextConfig;