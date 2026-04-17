// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jmeter.ai',
  compressHTML: true,
  integrations: [
    sitemap(),
    expressiveCode({
      themes: ['github-dark'],
      styleOverrides: {
        codeFontFamily: '"JetBrains Mono", ui-monospace, monospace',
      },
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
    }
  }
});