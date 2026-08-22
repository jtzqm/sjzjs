/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // 启用 standalone 输出，Cloudflare Pages 需要此配置
  images: {
    unoptimized: true, // Cloudflare Pages 会处理图片优化
  },
};

module.exports = nextConfig;
