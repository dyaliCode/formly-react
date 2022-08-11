// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsDark'); // nightOwl - oceanicNext - okaidia
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "FormlyJS",
  tagline: "A good solution to generate dynamic forms using rules, styles and more.",
  url: "https://formlyjs.github.io/",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // favicon: "img/favicon.ico",
  organizationName: "formlyjs",
  projectName: "formlyjs.github.io",
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "FormlyJS",
      logo: {
        alt: "Formlyjs Logo",
        src: "img/logo-2.png",
      },
      items: [
        {
          to: "gettingstarted/quickstart",
          label: "Docs",
          position: "left"
        },
        {
          href: "https://github.com/dyaliCode/formlyjs",
          position: "right",
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} <b>FormlyJS</b> with ♥ by Kamal Sahmoud.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["lua"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
        },
        theme: {
          customCss: require.resolve("./src/css/style.css"),
        },
      },
    ],
  ],
};
