/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
          pathname: '/**', // Allow all paths (recommended)
        },
      ],
    },
  };
  
  export default nextConfig;