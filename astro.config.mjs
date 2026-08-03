import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// Настройки на Astro за съвместимост с GitHub Pages (stu2007.github.io)
export default defineConfig({
  site: "https://stu2007.github.io", // Вашият личен GitHub Pages адрес
  base: "/",                          // Сайтът се намира в самия корен, а не в подпапка
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
