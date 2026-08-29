export const SITE = {
  title: "Whyz's Blog",
  description: "记录编程、阅读、项目与生活中的持续成长。",
  author: "Whyz",
};

export const CATEGORIES = {
  programming: {
    label: "编程学习",
    english: "Code Notes",
    description: "拆解概念，也记录每一次调试后的恍然大悟。",
    icon: "</>",
  },
  reading: {
    label: "读书笔记",
    english: "Reading",
    description: "与书页对话，把触动变成自己的理解。",
    icon: "Aa",
  },
  project: {
    label: "项目复盘",
    english: "Projects",
    description: "诚实回看过程，让下一次做得更从容。",
    icon: "↗",
  },
  life: {
    label: "生活记录",
    english: "Life",
    description: "收藏代码之外，那些轻盈而具体的日常。",
    icon: "☼",
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
