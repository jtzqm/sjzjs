/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除 output: 'export'，因为 Cloudflare Pages 使用 @opennextjs/cloudflare 需要 Next.js 完整构建
  images: {
    unoptimized: true, // Cloudflare Pages 会处理图片优化
  },
};

module.exports = nextConfig;
