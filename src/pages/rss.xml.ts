import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { products, siteConfig } from "../data/products";
import { challengeDays } from "../data/challenge";

export function GET(context: APIContext) {
  const productItems = products.map((p) => ({
    title: `${p.name} | ${p.tagline}`,
    description: p.description,
    link: p.externalUrl ?? `/products/${p.id}/`,
  }));

  const challengeItems = challengeDays.map((d) => ({
    title: `Day ${d.day}: ${d.title} | 30-Day Performance Testing Challenge`,
    description: d.objective,
    link: `/challenge/day-${d.day}/`,
  }));

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site ?? "https://jmeter.ai",
    items: [...productItems, ...challengeItems],
    customData: `<language>en-us</language>`,
  });
}
