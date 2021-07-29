# Vision

Here you will find a non binding tech focused vision of Wikidata and Wikibase generated from the overarching vision and strategy papers.

You can find the [2019 strategy papers here](https://meta.wikimedia.org/wiki/Wikidata/Strategy/2019).

- [Vision](https://meta.wikimedia.org/wiki/File:Vision_and_high_level_overview_for_Wikidata_and_Wikibase.pdf): high-level overview of where we’d like to see Wikidata and Wikibase evolve and grow
- [Wikidata for Wikimedia projects](https://meta.wikimedia.org/wiki/File:Strategy_for_Wikidata_for_Wikimedia_projects.pdf): how we see Wikidata developing in the context of the Wikimedia projects
- [Wikidata as a platform](https://meta.wikimedia.org/wiki/File:Strategy_for_Wikidata_as_a_platform.pdf): the value of Wikidata as a source of data for others outside Wikimedia
- [Wikibase ecosystem](https://meta.wikimedia.org/wiki/File:Strategy_for_Wikibase_Ecosystem.pdf): the idea of the Wikibase Ecosystem, a network of Wikibase instances which share data and other capacities

The strategy papers are currently being reworked (August 2021), so expect changes here soon.

## Diagram key

**Key:**

- 🎬 Just started
- 🧪 Prototyped in some way
- 🚧 In progress
- ✔️ Done

## Broad vision areas

```markmap
## Frontends

- Vue only UIs
- 🚧Component system
- Entities UIs
  - Compact UI
  - Faster editing

## APIs

- 🚧REST APIs
- 🧪GraphQL
- 🧪Batch changes
- 🧪Deferred changes
- Better rate control
- Versioned APIs

## Code repositories

- ✔️~~Consistency~~
  - ✔️~~PSR4~~
  - Directory structure
  - 🚧Developer tooling
  - Well defined
  - ✔️~~Automated overview~~
  - Automated management

## MediaWiki Extensions

- Using modern MW
  - ✔️~~Extension Registration~~
  - ✔️~~Service Containers~~
  - Modern Services
  - Modern Interfaces
    - No more Title
- 🎬Abstract MediaWiki binding
- Don't require extra maintenance scripts for operation

## Developers

- 🚧Development Environment
  - 🚧Fast
  - 🚧Featured
  - 🧪Seeded data
- Documentation
  - 🚧Architecture documentation
  - 🚧Wikibase Hub
  - Versioned
- Advocacy
  - Outreach (Blogs etc.)
  - SDK / Client libraries
```

## Product driven vision

```markmap
## General

- Scaling
  - Entity save resources
    - Modern Edit / Action filter
    - Granular entity alterations

## Wikimedia

- 🎬Subgraphs
- Micro contributions
- Inter project reconciliation
- Dataset dumps and exposure

## Wikibase users

- DevOps
  - ✔️~~Docker images v2~~
  - ✔️~~Documented releases~~
  - 🚧Website home for the software
  - Documented optimized configurations
- Wikibase Core
  - 🚧Federation
  - Include gadgets
  - 🚧More Data types
    - ✔️~~Non Commons / Local Media~~
  - Better Defaults
- Other Services
  - 🚧Wikibase as a service Sandbox
    - 🚧Wikibase as a service
      - Wikimedia as a service
  - Misc Triple store support
  - Tool landscape standardization
- MediaWiki Extensions
  - Alternate Authentication methods
  - Spam protection
  - Faster & Bulk imports
```
