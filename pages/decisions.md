# Decisions

Back in 2018 the team decided to start documenting all kinds of decisions with ADR documents (Architecture decision record documents).

You can read a bit about [ADRs here](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions).

Since we started using ADRs they are spread through multiple repositories and this page serves to try and tie them back together.

## Wikibase.git

Wikibase.git ADRs are documented [in doxygen](https://doc.wikimedia.org/Wikibase/master/php/md_docs_adr_index.html).

0) [Use cache instead of wb_terms for efficient fetching of data needed to display an entity in the short form](https://doc.wikimedia.org/Wikibase/master/php/adr_0000.html)
1) [Use PSR-16 PHP Cache Interface in Wikibase](https://doc.wikimedia.org/Wikibase/master/php/adr_0001.html)
2) [CacheAwarePropertyInfoStore caching method](https://doc.wikimedia.org/Wikibase/master/php/adr_0002.html)
3) [Termbox ParserCache Integration](https://doc.wikimedia.org/Wikibase/master/php/adr_0003.html)
4) [Make ChangeOp::apply() return ChangeOpResult](https://doc.wikimedia.org/Wikibase/master/php/adr_0004.htl)
5) [Invalidate ParserCache on backwards incompatible frontend changes](https://doc.wikimedia.org/Wikibase/master/php/adr_0005.html)
6) [Use Package Modules for dependency management within ResourceLoader modules](https://doc.wikimedia.org/Wikibase/master/php/adr_0006.html)
7) [Use vuex-smart-modules in Data Bridge](https://doc.wikimedia.org/Wikibase/master/php/adr_0007.html)
8) [Format Bridge references via API](https://doc.wikimedia.org/Wikibase/master/php/adr_0008.html)
9) [Refactor hooks for testability](https://doc.wikimedia.org/Wikibase/master/php/adr_0009.html)
10) [Do not add source information to Property IDs for the Federated Properties MVP](https://doc.wikimedia.org/Wikibase/master/php/adr_0010.html)
11) [declare strict_types Rollout](https://doc.wikimedia.org/Wikibase/master/php/adr_0011.html)
12) [PSR-4 and maintenance scripts](https://doc.wikimedia.org/Wikibase/master/php/adr_00012.html)
13) [Register shared features in Repo and Client](https://doc.wikimedia.org/Wikibase/master/php/adr_0013.html)
14) [Make Wikibase.git a monorepo](https://doc.wikimedia.org/Wikibase/master/php/adr_0014.html)
15) [Use PSR-11-compatible MediaWiki service container as extension basis](https://doc.wikimedia.org/Wikibase/master/php/adr_0015.html)
16) [Use GitHub Actions as secondary CI system for Wikibase](https://doc.wikimedia.org/Wikibase/master/php/adr_0016.html)
17) [Wikibase Extension release notes content](https://doc.wikimedia.org/Wikibase/master/php/adr_0017.html)

## Wikit (Design System)

Wikit ADRs are documented [in storybook](https://wmde.github.io/wikit/?path=/story/documentation-decisions-and-adrs-overview--page).

1) [Use a Non-agnostic Design System](https://wmde.github.io/wikit/?path=/story/documentation-decisions-and-adrs-adrs-1-use-a-non-agnostic-design-system--page)
2) [Approach for reuse of variables from wikimedia-ui-base](https://wmde.github.io/wikit/?path=/story/documentation-decisions-and-adrs-adrs-2-approach-for-reuse-of-variables-from-wikimedia-ui-base--page)
3) [Design token agnosticism and tooling](https://wmde.github.io/wikit/?path=/story/documentation-decisions-and-adrs-adrs-3-design-token-agnosticism-and-tooling--page)
4) [Use a monorepo](https://wmde.github.io/wikit/?path=/story/documentation-decisions-and-adrs-adrs-4-use-a-monorepo--page)
5) [Use TypeScript](https://wmde.github.io/wikit/?path=/story/documentation-decisions-and-adrs-adrs-5-use-typescript--page)
6) [Manual token documentation](https://wmde.github.io/wikit/?path=/story/documentation-decisions-and-adrs-adrs-6-manual-token-documentation--page)
7) [CSS base](https://wmde.github.io/wikit/?path=/story/documentation-decisions-and-adrs-adrs-7-css-base--page)
8) [CSS scoping](https://wmde.github.io/wikit/?path=/story/documentation-decisions-and-adrs-adrs-8-css-scoping--page)
9) [RTL support](https://wmde.github.io/wikit/?path=/story/documentation-decisions-and-adrs-adrs-9-rtl-support--page)
10) [Browser testing](https://wmde.github.io/wikit/?path=/story/documentation-decisions-and-adrs-adrs-10-browser-testing--page)
11) [Visual testing](https://wmde.github.io/wikit/?path=/story/documentation-decisions-and-adrs-adrs-11-visual-testing--page)
12) [Remove predefined widths](https://wmde.github.io/wikit/?path=/story/documentation-decisions-and-adrs-adrs-12-remove-predefined-widths--page)
13) [Pre-Release Workflow](https://wmde.github.io/wikit/?path=/story/documentation-decisions-and-adrs-adrs-13-pre-release-workflow--page)