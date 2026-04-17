import rss from '@astrojs/rss';
import { siteConfig } from '../data/products';
import type { APIContext } from 'astro';

const postImports = import.meta.glob('./blog/**/*.mdx', { eager: true });

export async function GET(context: APIContext) {
  const posts = Object.entries(postImports)
    .filter(([path, post]: [string, any]) => post.frontmatter && !post.frontmatter?.draft)
    .map(([path, post]: [string, any]) => ({
      slug: path.replace('./blog/', '').replace(/\.mdx$/, ''),
      ...post.frontmatter,
    }))
    .sort((a: any, b: any) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf());

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site!,
    items: posts.map((post: any) => ({
      title: post.title,
      pubDate: new Date(post.pubDate),
      description: post.description,
      link: `/blog/${post.slug}/`,
      author: post.author ?? 'QAInsights',
      categories: post.tags ?? [],
    })),
    customData: `<language>en-us</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
  });
}
