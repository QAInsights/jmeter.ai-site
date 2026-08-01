# JMeter.AI — Performance Intelligence Suite

Source code for [jmeter.ai](https://jmeter.ai) — the one place for people working with Apache JMeter and related performance testing tools.

## What's here

- **Product suite** — open-source JMeter plugins by [QAInsights](https://qainsights.com):
  - [Feather Wand](https://jmeter.ai/products/feather-wand/) — AI-powered test generation for JMeter
  - [Super Key](https://jmeter.ai/products/super-key/) — keyboard shortcuts & command palette
  - [Prism](https://jmeter.ai/products/prism/) — multi-tab interface for JMeter
  - [JMeter Studio](https://jmeter.ai/products/jmeter-studio/) — themes, dark mode, icon packs
  - [README Config](https://jmeter.ai/products/readme-config/) — live Markdown docs inside test plans
  - [Perftractor](https://jmeter.ai/products/perftractor/) — performance testing calculators
- **30-Day Performance Testing Challenge** — [`/challenge/`](https://jmeter.ai/challenge/)
- **LLM Hub** — copy-ready AI prompts and inference metrics for performance engineers
- **Academy** — curated JMeter, k6, Gatling, and performance engineering video playlists

## Tech stack

[Astro](https://astro.build) + Tailwind CSS 4, deployed on Vercel. Content is data-driven from `src/data/`.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the build locally |
| `npm test` | Run vitest suite |

## Environment variables

See [.env.example](.env.example) — Clerk auth keys (optional for most pages) and `PUBLIC_GA_MEASUREMENT_ID` for Google Analytics 4.

## AI / agent discovery

- [`llms.txt`](https://jmeter.ai/llms.txt) — machine-readable site summary
- [`skill.md`](https://jmeter.ai/skill.md) — canonical JMeter skill for AI agents
- [`.well-known/ai-agent.json`](https://jmeter.ai/.well-known/ai-agent.json) — agent manifest

## License

MIT © [NaveenKumar Namachivayam (QAInsights)](https://qainsights.com)
