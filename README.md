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

## Deployment

The site is built using Github Actions and is deployed to Github Pages.
