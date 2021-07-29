# Wikidata Wikibase Team

Wikidata & Wikibase team site, including manually maintained and automatically generated content.

The code is on [Github](https://github.com/wmde/wikidata-wikibase-team).

## Layout

- `/pages`, Markdown manually maintained page content
- `/.vuepress/components`, VueJS components
- `/data`, Data used for content generation
- `/bin`, scripts to generate data for the site

## Development

You can get a local copy of the site running using:

```sh
npm install
npm run dev
```

If you want to update the data pulled from various apis run:

```sh
npm run refresh-data
```

## Deployment

The site is built using Github Actions and is deployed to Github Pages from the `main` branch.

## Diagrams

## [markmap](https://markmap.js.org/)

Visualize your Markdown with mindmaps.

A [VuePress plugin](https://www.npmjs.com/package/vuepress-plugin-markmap) allows markmap to be used directly in markdown files.

An [online live editor](https://markmap.js.org/repl) exists if you wish to easily view and edit these diagrams.

### [mermaid](https://mermaid-js.github.io/mermaid/#/)

A [VuePress plugin](https://vuepress-plugin-mermaidjs.efrane.com/) allows mermaid diagrams to be included directly in markdown files.

An [online live editor](https://mermaid-js.github.io/mermaid-live-editor/) exists if you wish to easily view and edit mermaid diagrams.