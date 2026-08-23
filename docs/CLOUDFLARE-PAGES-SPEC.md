# Cloudflare Pages 托管技术规范

本文档是本项目测试阶段的部署基线。后续修改代码时，应以本文档和当前可成功构建的配置为准。

## 1. 部署目标

本项目使用 **Cloudflare Pages 静态站点部署**，不是 Cloudflare Workers，也不是 OpenNext Worker 部署。

部署链路如下：

```text
GitHub main 分支
        |
        v
npm run build
        |
        v
Next.js 静态导出到 out/
        |
        v
Cloudflare Pages 发布 out/
```

## 2. Cloudflare Pages 配置

在 Cloudflare Pages 的 Git 构建设置中固定使用：

| 配置项       | 值              |
| ------------ | --------------- |
| Git 仓库     | `jtzqm/sjzjs`   |
| 生产分支     | `main`          |
| 构建命令     | `npm run build` |
| 构建输出目录 | `out`           |
| 根目录       | `/`             |

不要选择或启用以下部署方式：

- OpenNext
- Workers
- Wrangler 自动部署
- Cloudflare adapter 的 Worker 部署

## 3. 必须保持的项目配置

### Next.js 配置

`next.config.js` 必须保留静态导出相关配置：

```js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

这些配置的作用是：

- `output: 'export'`：将页面输出为可直接托管的静态文件。
- `trailingSlash: true`：为路由生成目录形式的 HTML，适配 Pages 静态文件路由。
- `images.unoptimized: true`：静态导出不能依赖 Next.js 图片优化服务器。

### package.json 脚本

生产构建入口必须是：

```json
{
  "scripts": {
    "build": "next build"
  }
}
```

不要把 `build` 改成 `opennextjs-cloudflare build`、`wrangler deploy` 或其他 Worker 部署命令。

## 4. 路由和页面开发约束

### 动态路由

静态导出中的动态路由必须提供 `generateStaticParams()`，例如：

```tsx
export function generateStaticParams() {
  return ACCOUNTS.map((account) => ({
    accountId: account.id,
  }));
}
```

新增动态路由时，必须同时提供所有可预渲染参数。否则构建时可能无法生成对应页面。

### 数据来源

测试阶段的数据应使用本地静态数据、常量或构建时可读取的数据。不要在页面服务端渲染中依赖：

- 运行中的 Node.js 服务器
- 本地文件以外的临时数据库
- 仅在部署机器上存在的文件
- 未配置的环境变量

如果未来需要登录、订单、数据库或服务端 API，应单独设计后端服务，不要直接把当前静态 Pages 项目改成 Worker 项目。

### 浏览器交互

需要 `useState`、`useEffect`、事件处理或浏览器 API 的组件，必须使用 `'use client'`，并由服务端页面传入可序列化的数据。

### 图片

使用 `next/image` 时必须保持 `unoptimized: true`。新增图片应放在 `public/` 下，并使用可在静态导出后访问的路径。

## 5. 明确禁止的改动

以下改动会增加 Cloudflare 构建或部署失败的风险，除非同时重新设计部署架构，否则不要提交：

- 删除 `output: 'export'`。
- 把构建输出目录从 `out` 改成 `.next`。
- 在 `next.config.js` 中加入依赖服务器运行时的功能。
- 使用没有 `generateStaticParams()` 的动态路由。
- 在静态页面中直接使用只能在 Node.js 中运行的 API。
- 将 `build` 脚本改为 OpenNext、Wrangler 或 Worker 部署命令。
- 提交 Cloudflare 自动生成的 `wrangler.jsonc`、`.dev.vars` 或 `.open-next/`。
- 添加 `WORKER_SELF_REFERENCE` 服务绑定。
- 执行 `npm audit fix --force` 后不检查 Next.js 和其他核心依赖的版本变化。

## 6. 本地验证流程

每次修改后，至少执行：

```bash
npm install
npm run build
```

构建成功必须看到类似结果：

```text
Compiled successfully
Generating static pages
Exporting
```

并确认项目根目录生成了 `out/` 目录。

提交前建议继续检查：

```bash
git status
git diff --check
```

如果改动涉及动态路由、图片、环境变量或 `next.config.js`，不能只依赖 TypeScript 检查，必须完整执行 `npm run build`。

## 7. GitHub 提交规范

建议使用小提交，每次只包含一个功能或一类修复：

```bash
git add .
git commit -m "feat: describe the change"
git push origin main
```

推送前确认：

- `npm run build` 已成功。
- `git status` 没有误提交 `.env`、`.dev.vars`、`.open-next/` 或构建缓存。
- Cloudflare Pages 的构建命令仍是 `npm run build`。
- Cloudflare Pages 的输出目录仍是 `out`。

## 8. 故障判断

### 出现 JSX 或 Module not found 错误

这是源码或导入路径问题。先在本地执行 `npm run build`，根据第一条错误修复，不要修改 Cloudflare 部署模式。

### 出现 `WORKER_SELF_REFERENCE` 或 Worker 不存在

这是部署方式或 Cloudflare 自动生成配置错误，不是页面源码错误。检查 Cloudflare 项目是否误走 OpenNext/Workers 流程，并确认当前项目按 Pages 静态站点部署，输出目录为 `out`。

### 出现 npm audit 警告

审计警告通常不会直接导致构建失败。不要在没有查看依赖变更的情况下使用 `npm audit fix --force`，因为它可能升级核心依赖并引入破坏性变化。先记录漏洞包和影响范围，再单独处理依赖升级。

## 9. 当前基线

当前已验证的生产构建命令：

```bash
npm run build
```

当前已验证的静态页面包括首页、业务页面、租赁列表和账号详情页。任何配置级修改都必须重新通过完整构建后再推送到 `main`。
