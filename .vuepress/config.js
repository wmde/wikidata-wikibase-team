module.exports = {
    title: 'Wikidata/Wikibase Team',
    description: 'I\'m all about the Wikidata & Wikibase Team',
    /**
     * Ref：https://v1.vuepress.vuejs.org/guide/assets.html#base-url
     * Ref: https://vuepress.vuejs.org/guide/deploy.html#github-pages
     */
    base: process.env.BASE_PATH || '/',
    patterns: [
        '**/*.md',
        '!**/node_modules'
    ],
    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        docsDir: '',
        docsRepo: 'wmde/wikidata-wikibase-team',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit this page on Github!',
        lastUpdated: true,
        activeHeaderLinks: false, // Default: true
        displayAllHeaders: true, // Default: false
        nav: [
            { text: 'Documentation', link: '/documentation/' },
            { text: 'Repositories', link: '/repositories/' },
            { text: 'Projects', link: '/projects/' },
            { text: 'Decisions', link: '/decisions/' },
            { text: 'Vision', link: '/vision/' }
        ],
        sidebar: {
            '/documentation/': [
                [ './', 'Documentation Overview' ]
            ],
            '/repositories/': [
                [ './', 'Repositories' ],
            ],
            '/projects/': [
                [ './', 'Projects Overview' ],
                [ './wikibase', 'Wikibase' ],
                [ './wikidata', 'Wikidata' ],
                [ './misc', 'Miscellaneous' ],
            ],
            '/decisions/': [
                [ './', 'Decisions' ],
            ],
            '/vision/': [
                [ './', 'Vision' ],
            ],
            '/': [
                '/',
            ]
        },
    },
    plugins: [
        'vuepress-plugin-mermaidjs',
        'vuepress-plugin-markmap',
        '@vuepress/medium-zoom'
    ],
}
