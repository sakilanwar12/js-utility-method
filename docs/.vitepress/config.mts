import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "js-utility-method",
  description:
    "A lightweight collection of standalone JavaScript utility functions",
  base: "/js-utility-method/",
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    ["link", { rel: "shortcut icon", href: "/favicon.png" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "js-utility-method",
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
          { text: "Convert", link: "/api/convert" },
          { text: "Generator", link: "/api/generator" },
          { text: "Number", link: "/api/number" },
          { text: "String", link: "/api/string" },
          { text: "Array", link: "/api/array" },
          { text: "Object", link: "/api/object" },
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
