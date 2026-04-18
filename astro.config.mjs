// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://jmeter.ai',
  // Let astro-compress handle final HTML minification; keep Astro's built-in
  // whitespace squashing off to avoid double-work.
  compressHTML: false,
  integrations: [
    sitemap(),
    expressiveCode({
      themes: ['github-dark'],
      styleOverrides: {
        codeFontFamily: '"JetBrains Mono", ui-monospace, monospace',
      },
    }),
    mdx(),
    // Must be LAST so it sees the final build output.
    // Compresses HTML, CSS, JS, SVG, and raster images in dist/.
    compress({
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false, // keep quotes — safer for SVG attrs
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
          sortAttributes: true,
          sortClassName: true,
          decodeEntities: true,
        },
      },
      CSS: true,
      JavaScript: true,
      SVG: true,
      // Skip image recompression — Astro's Sharp service already handles
      // OG / favicon assets; avoids long build times and extra CPU.
      Image: false,
      // Logger accepts `boolean | 0 | 1 | 2` per @playform/pipe types
      // (default: 2). Using 1 = summary-only output (one line per file-type)
      // — quieter for CI logs while still confirming compression ran.
      Logger: 1,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});