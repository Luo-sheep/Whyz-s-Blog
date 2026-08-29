import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../data/site";
import { visiblePosts } from "../utils/posts";

export async function GET(context) {
  const posts = visiblePosts(await getCollection("posts"));
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/posts/${post.id}/`,
    })),
  });
}
