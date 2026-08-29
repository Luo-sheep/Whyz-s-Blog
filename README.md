# Whyz's Blog

一个使用 Astro、TypeScript、原生 CSS 和 Markdown 搭建的个人成长博客。

## 开始运行

```bash
npm install
npm run dev
```

终端会显示一个本地地址，通常是 `http://localhost:4321`。在浏览器打开它即可看到网站。

其他常用命令：

```bash
npm run check    # 检查类型和内容格式
npm run build    # 生成可以部署的静态网站
npm run preview  # 预览刚刚生成的网站
```

## 目录是怎样分工的

```text
src/
├── components/       可重复使用的小组件
├── content/posts/    Markdown 文章
├── data/             网站名称、分类等固定信息
├── layouts/          页面共用框架
├── pages/            URL 对应的页面
├── styles/           全站样式
└── utils/            日期、阅读时长等工具
```

可以先记住三件事：

1. `pages` 决定网站有哪些地址。
2. `components` 和 `layouts` 避免重复写相同界面。
3. `content/posts` 是以后最常使用的写作目录。

## 新建一篇文章

在 `src/content/posts` 新建一个 Markdown 文件，例如：

```text
my-first-project.md
```

文件名会成为文章网址的一部分，应只使用小写英文、数字和连字符。内容从下面的模板开始：

```markdown
---
title: "文章标题"
description: "用一句话介绍文章"
publishDate: 2026-07-23
category: project
tags:
  - 项目
  - 复盘
draft: true
---

这里开始写正文。
```

分类只能填写：

- `programming`：编程学习
- `reading`：读书笔记
- `project`：项目复盘
- `life`：生活记录

写作时先保留 `draft: true`。确认完成后改为 `false`，文章才会进入正式构建、RSS 和 Sitemap。

## 修改个人信息

- 网站名称和四类内容说明：`src/data/site.ts`
- 首页自我介绍与学习状态：`src/pages/index.astro`
- 关于页：`src/pages/about.astro`
- 颜色、间距和响应式设计：`src/styles/global.css`

## 准备公开时

部署前必须把 `astro.config.mjs` 中的：

```js
site: "https://example.com"
```

替换为最终的网站地址。这个值用于 canonical URL、RSS 和 Sitemap。确认地址后再运行一次 `npm run build`。

当前项目没有远程仓库，也不会自动公开。
