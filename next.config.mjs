/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost:3000',
        port: '',
        pathname: '/',
      },
    ],
  },
};

export default nextConfig;
