import { collection, config, fields } from "@keystatic/core";

const isVercel = process.env.VERCEL === "1";

export default config({
  storage: isVercel ? { kind: "cloud" } : { kind: "local" },
  ...(isVercel
    ? { cloud: { project: "wicy-blog/whyz-s-blog" } }
    : {}),
  ui: {
    brand: { name: "Whyz's Blog 写作空间" },
    navigation: {
      内容: ["posts"],
    },
  },
  collections: {
    posts: collection({
      label: "文章与想法",
      slugField: "title",
      path: "src/content/posts/*",
      entryLayout: "content",
      format: { contentField: "body" },
      columns: ["title", "category", "publishDate", "draft"],
      schema: {
        title: fields.slug({
          name: {
            label: "标题",
            description: "文章列表和浏览器标签中显示的标题。",
            validation: { isRequired: true },
          },
          slug: {
            label: "网址名称",
            description: "建议使用小写英文、数字和连字符；保存后尽量不要修改。",
            validation: {
              pattern: {
                regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                message: "请使用小写英文、数字和连字符，例如 my-first-note。",
              },
            },
          },
        }),
        description: fields.text({
          label: "文章简介",
          description: "用一两句话概括内容，也会用于搜索结果和分享信息。",
          multiline: true,
          validation: { isRequired: true, length: { max: 180 } },
        }),
        publishDate: fields.date({
          label: "发布日期",
          defaultValue: { kind: "today" },
          validation: { isRequired: true },
        }),
        updatedDate: fields.date({
          label: "更新日期",
          description: "只有文章经过明显修改时才填写。",
        }),
        category: fields.select({
          label: "分类",
          defaultValue: "programming",
          options: [
            { label: "编程学习", value: "programming" },
            { label: "读书笔记", value: "reading" },
            { label: "项目复盘", value: "project" },
            { label: "生活记录", value: "life" },
          ],
        }),
        tags: fields.array(
          fields.text({ label: "标签", validation: { isRequired: true } }),
          {
            label: "标签",
            description: "例如 Astro、数据结构、读书。",
            itemLabel: (props) => props.value,
          },
        ),
        draft: fields.checkbox({
          label: "保存为草稿",
          description: "开启后不会显示在博客、RSS 或 Sitemap 中。",
          defaultValue: true,
        }),
        cover: fields.text({
          label: "封面地址",
          description: "可选。填写站内图片路径或完整图片网址。",
        }),
        body: fields.markdoc({
          label: "正文",
          extension: "md",
          options: {
            bold: true,
            italic: true,
            strikethrough: true,
            code: true,
            heading: [2, 3, 4],
            blockquote: true,
            orderedList: true,
            unorderedList: true,
            table: true,
            link: true,
            divider: true,
            codeBlock: true,
            image: {
              directory: "public/images/posts",
              publicPath: "/images/posts/",
            },
          },
        }),
      },
    }),
  },
});
