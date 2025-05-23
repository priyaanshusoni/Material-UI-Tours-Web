/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
         remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tcproduction.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'd2ru2mvuh5wx24.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'www.niagarafallsstatepark.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.simpleviewcms.com',
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'footwearnews.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
    ],
    }
};

export default nextConfig;
