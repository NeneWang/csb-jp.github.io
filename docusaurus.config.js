const title = "アｌゴドク";
const description = "アｌゴリツモ　ど　ェエｔコデ.";
const owner = "Nelson";
const repo = "csb-jp.github.io";
const locales = ["en"];

module.exports = {
  // url: "https://csb-jp.github.io",
  url: "http://127.0.0.1:5500",
  baseUrl: "/",
  title,
  favicon: "img/favicon.ico",
  tagline: description,
  organizationName: owner,
  projectName: repo,
  trailingSlash: true,
  i18n: { locales, defaultLocale: locales[0] },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `https://github.com/${owner}/${repo}/edit/master`,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [require("remark-deflist")],
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        offlineModeActivationStrategies: ["always"],
        pwaHead: [
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/apple-touch-icon.png",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#0971f1",
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'algo-1',
        path: 'algo-1',
        routeBasePath: 'algo-1',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'algo-2',
        path: 'algo-2',
        routeBasePath: 'algo-2',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'algo-3',
        path: 'algo-3',
        routeBasePath: 'algo-3',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title,
      logo: {
        alt: `${title} ロゴ`,
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          label: "ドキュメント",
        },
        {
          type: 'dropdown',
          label: 'アｌゴ',
          position: 'left',
          items: [

            {
              href: `/algo-1`,
              label: "アｌゴ一弾",

            },
            {
              href: `/algo-2`,
              label: "アｌゴ二弾",
            },
            {
              href: `/algo-3`,
              label: "アｌゴ三弾",
            },
          ]
        },
        {
          label: 'パッティｒン',
          href: '/pattern',
          position: 'left',
        },
      ],
    },
    footer: {},
  },
  customFields: {
    features: [
      {
        title: "このサイトについて",
        description: [
          "Web アプリケーション開発のためのオンラインエディター CodeSandbox の使い方や機能をまとめたサイトです。",
          "誤字・脱字の修正、ドキュメント追加、その他改善するための Pull Request を歓迎します。",
          "また、質問、提案などあれば GitHub Issues にてお気軽にご報告ください。",
        ].join(""),
      },
    ],
  },
};
