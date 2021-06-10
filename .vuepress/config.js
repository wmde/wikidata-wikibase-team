module.exports = {
    title: 'Wikidata/Wikibase Team Site',
    description: 'I\'m all about the team',
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
        sidebar: [
            '/',
            '/pages/architecture.md',
            '/pages/decisions.md',
            '/pages/repositories.md',
            '/pages/vision.md'
          ],
    },
    plugins: [
        [
          'vuepress-plugin-markmap'
        ]
    ],
}