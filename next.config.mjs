/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
            port: '',
            pathname: '/img/**',
          },
        ],
      },
};
// https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"

export default nextConfig;
