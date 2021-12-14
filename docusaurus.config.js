// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RedBrick",
  tagline: "A Customizable CSS Framework.",
  url: "https://redbrick.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "redbrick", // Usually your GitHub org/user name.
  projectName: "redbrick", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "RedBrick",
        logo: {
          alt: "Redbrick Logo",
          src: "img/bricks.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },

          {
            label: "Download",
            to: "https://github.com/Adarsh0603/redbrick/files/7709642/redbrickv1.0.4.zip",
          },
          // {
          //   href: "",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "RedBrick CSS",
            items: [
              {
                label: "Get Started",
                to: "/docs/intro",
              },
              {
                label: "Download",
                to: "https://github.com/Adarsh0603/redbrick/files/7709642/redbrickv1.0.4.zip",
              },
            ],
          },

          {
            title: "Contribute",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Adarsh0603/redbrick",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Redbrick.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
