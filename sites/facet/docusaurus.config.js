const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Facet',
    tagline: 'A web component library and UI design system for Pulumi.',
    url: 'http://facet.pulumi-dev.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'pulumi',
    projectName: 'facet',

    presets: [
        [
            '@docusaurus/preset-classic',

            /** @type {import('@docusaurus/preset-classic').Options} */
            {
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/pulumi/facet/edit/master/sites/facet/',
                },
                theme: {
                    customCss: [require.resolve('./src/css/custom.css')],
                },
            },
        ],
    ],

    clientModules: [
        require.resolve("./src/main.js"),
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        {
        customCss: [
            require.resolve('./src/css/custom.css'),
        ],
        navbar: {
            title: "Facet",
            logo: {
                alt: 'Pulumi logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    href: '/',
                        label: 'Docs',
                    },
                {
                    href: 'https://github.com/pulumi/facet',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Intro',
                            to: '/',
                        },
                        {
                            label: 'Getting Started',
                            to: '/getting-started/installing',
                        },
                    ],
                },
                {
                    title: 'Design System',
                    items: [
                        {
                            label: 'Design Tokens',
                            href: '/design-system/design-tokens',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/pulumi/facet',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Pulumi Corporation. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
};
