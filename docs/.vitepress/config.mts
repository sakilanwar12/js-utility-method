import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "js-utility-method",
  description:
    "A lightweight collection of standalone JavaScript utility functions",
  base: "/js-utility-method/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/getting-started" },
      { text: "API", link: "/api/array" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [{ text: "Getting Started", link: "/guide/getting-started" }],
      },
      {
        text: "API Reference",
        items: [
          { text: "Array", link: "/api/array" },
          { text: "String", link: "/api/string" },
          { text: "Number", link: "/api/number" },
          { text: "Object", link: "/api/object" },
          { text: "Convert", link: "/api/convert" },
          { text: "Generator", link: "/api/generator" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/sakilanwar12/js-utility-method",
      },
    ],
  },
});
