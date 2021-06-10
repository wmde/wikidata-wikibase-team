# Vision

An old team owned and developed technical vision diagram was created with the GoJS diagram library in 2020.

This has now been converted to be markdown powered using markmap JS.

```markmap
# Wikidata & Wikibase

## UI

- Vue only UI
- Component system
- Entities
  - Compact UI
  - Faster editing

## APIs

- REST
- GraphQL
- Batch
- Deferred
- Better rate control
- Versioning

## MediaWiki Extensions

- Using modern MW
  - ~~Extension Registration~~
  - Service Containers
  - Modern Services
  - Modern Interfaces
- ~~Consistent Structure~~
  - ~~PSR4~~
- Abstract MediaWiki binding

## Libraries

- Consistent tooling
- Easier releases
- Well defined
- More libraries extracted
- Automated management

## Processes

- Dispatch using jobs
- Some processes disabled by default
  - wb_changes
- PropertySuggester automation

## For Wikimedia

- Scaling
  - Entity save resources
    - Modern Edit / Action filter
    - Granular entity alterations
  - Visibility of subgraphs
    - Recent Changes
    - Search
    - etc.
- Micro contributions
- Inter project reconciliation
- Dataset dumps and exposure

## For 3rd Parties

- DevOps
  - Docker images v2
  - Documented releases
  - Website home for the software
  - Documented optimized configurations
- Wikibase Core
  - Federation
  - Include gadgets
  - More Data types
    - Non Commons Media
  - Better Defaults
- Other Services
  - Wikibase as a service Sandbox
    - Wikibase as a service
      - Wikimedia as a service
  - Misc Triple store support
  - Tool landscape standardization
- MediaWiki Extension
  - Alternate Authentication methods
  - Spam protection
  - Faster & Bulk imports

## For Developers

- Development Environment
  - Fast
  - Featured
  - Seeded data
- Documentation
  - Wikibase Hub
  - Versioned
  - Diagramed
- Advocacy
  - Outreach (Blogs etc.)
  - SDQ / Client libraries
```
