/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization, x-api-key, Origin'
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig 