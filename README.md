# 东非电竞 (Dagong E-sports)

东非电竞是一个一站式陪玩门户网站，提供陪玩护航、账号收号、物品撞车、部门任务等多种电竞相关服务。

## 🚀 技术栈

本项目基于现代 Web 技术栈构建，旨在提供极速、流畅的用户体验：

- **框架**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI 库**: [React](https://reactjs.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **动画**: [Framer Motion](https://www.framer.com/motion/)
- **图标**: [Lucide React](https://lucide.dev/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)

## ✨ 功能特性

- **陪玩护航**: 提供专业的陪玩服务，提升游戏体验。
- **账号收号**: 安全、便捷的账号交易/租赁流程。
- **物品撞车**: 针对特定游戏物品的交互功能。
- **部门任务**: 参与平台内的各类任务，赚取奖励。
- **响应式设计**: 完美适配桌面端与移动端浏览器。

## 🛠️ 快速开始

确保你的本地环境已安装 [Node.js](https://nodejs.org/) (建议版本 18.x 或更高)。

### 1. 克隆仓库

```bash
git clone https://github.com/jtzqm/sjzjs
cd sjzjs
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

现在，你可以访问 [http://localhost:3000](http://localhost:3000) 来查看效果。

### 4. 构建项目

```bash
npm run build
```

## Cloudflare Pages 部署规范

本项目采用 Cloudflare Pages 静态站点部署。Cloudflare Pages 的构建命令为 `npm run build`，构建输出目录为 `out`。后续修改前请先阅读 [Cloudflare Pages 托管技术规范](docs/CLOUDFLARE-PAGES-SPEC.md)，其中记录了静态导出、动态路由、图片和提交前验证要求。

## 📂 项目结构

```text
src/
├── app/            # Next.js App Router 页面与路由
├── components/     # 可复用的 React 组件
├── constants/      # 静态常量与配置
├── lib/            # 业务逻辑与数据处理函数
├── types/          # TypeScript 类型定义
└── ...
```

## 📝 许可证

本项目遵循私有协议，仅供个人学习与展示使用。
