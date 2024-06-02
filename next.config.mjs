/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pakhomov.site',
        port: '',
        pathname: '/',
      },
    ],
  },
};

export default nextConfig;
