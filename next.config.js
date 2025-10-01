/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  trailingSlash: true,
  /*output: 'export', outにアウトプットする時のみ使用*/
  experimental: {
    serverActions: true
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**', // すべてのパスを許可
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // すべてのパスを許可
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**',
      },
      {
        protocol: 'https',
        hostname: 'ctfassets.net',
        pathname: '/s/files/**',
      }
    ]
    //unoptimized: true
  },

  compress: true, // ファイル圧縮を明示的に有効化
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.minimize = true; // ミニファイを強制的に有効化
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: '/about/bs1st',
        destination: '/about',
        permanent: true,
      },

      // 他のリダイレクトルールを追加可能
    ];
  },
};

module.exports = nextConfig;
