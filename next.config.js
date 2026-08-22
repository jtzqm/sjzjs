/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 启用静态导出模式
  images: {
    unoptimized: true, // 静态导出不支持 Next.js 默认的图片优化，必须禁用
  },
};

module.exports = nextConfig;
