# Wikidata Wikibase Team

Wikidata & Wikibase team site, including manually maintained and automatically generated content.

### Structure

- [Index](./): Site & Content intro, Development & Deployment details
- [Process](./pages/process.html): Guides for the processes used by the team
- [Documentation](./pages/documentation.html): All team relevant docs should be findable from this portal
- [Architecture](./pages/architecture.html): Link to the team architecture docs
- [Decisions](./pages/decisions.html): Collection of team decisions from all repsositories
- [Projects](./pages/projects.html): Projects the team is running or responsible for
- [Repositories](./pages/repositories.html): All code repositories the team is responsible for
- [Vision](./pages/vision.html): Overall tech vision fed from product stratergy and vision

## Deployment

The site is built using Github Actions and is deployed to [Github Pages](https://wmde.github.io/wikidata-wikibase-team/) from the `main` branch.

The `refresh-data` command also runs weekly in a Github Action.

## Development

The code is on [Github](https://github.com/wmde/wikidata-wikibase-team).

### Layout

- `/pages`, Markdown manually maintained page content
- `/.vuepress/components`, VueJS components
- `/data`, Data used for content generation
- `/bin`, scripts to generate data for the site

### Commands

You can install the site dependencies running:

```sh
npm install
```

You can get a local live updating copy of the site running using:

```sh
npm run dev
```

If you want to update the data pulled from various apis run:

```sh
npm run refresh-data
```

### Diagraming

### [markmap](https://markmap.js.org/)

Visualize your Markdown with mindmaps.

A [VuePress plugin](https://www.npmjs.com/package/vuepress-plugin-markmap) allows markmap to be used directly in markdown files.

An [online live editor](https://markmap.js.org/repl) exists if you wish to easily view and edit these diagrams.

### [mermaid](https://mermaid-js.github.io/mermaid/#/)

A [VuePress plugin](https://vuepress-plugin-mermaidjs.efrane.com/) allows mermaid diagrams to be included directly in markdown files.

An [online live editor](https://mermaid-js.github.io/mermaid-live-editor/) exists if you wish to easily view and edit mermaid diagrams.
