# Process

## Campsite

### Task ingestion

Campsite tasks come from a variety of places.

```mermaid
graph LR
A[Phabricator task created] -->|Tagged & Seen| B1(Wikidata product backlog)
A[Phabricator task created] -->|Tagged & Seen| B2(Wikibase product backlog)
A[Phabricator task created] -->|Tagged & Seen| B3(Wikidata / Wikibase Tech backlog)
A[Phabricator task created] -->|Tagged & Seen| B4(Design System backlog)

B1(Wikidata product backlog) -->|Prioritized by product| Backlog1(Prioritized backlog)
Backlog1(Prioritized backlog) -->|Product Polishing| CP1(Campsite Product Polishing)
CP1(Campsite Product Polishing) -->|Pickup attempt, weekly| C2(Campsite Storytime)

B2(Wikibase product backlog) -->|Prioritized by product| Backlog2(Prioritized backlog)
Backlog2(Prioritized backlog) -->|Product Polishing| CP2(Campsite Product Polishing)
CP2(Campsite Product Polishing) -->|Pickup attempt, weekly| C2(Campsite Storytime)

B3(Wikidata / Wikibase Tech backlog) -->|Brought to Prioritization Session | P3(Tech Prioritization Session)
P3(Tech Prioritization Session) -->|Prioritized| Backlog3(Tech prioritized backlog)
Backlog3(Tech prioritized backlog) -->|Groomed| CP3(Campsite Tech Polishing)
CP3(Campsite Tech Polishing) -->|Pickup attempt, weekly| C2(Campsite Storytime)


B4(Design System backlog) -->|Brought to Prioritization Session | P4(DS Grooming Session)
P4(DS Grooming Session) -->|Groomed & Prioritzed| Backlog4(DS prioritized backlog)
Backlog4(DS prioritized backlog) -->|Pickup attempt, every 2 weeks| C2(Campsite Storytime)

C2(Campsite Storytime) -->|Estimated & picked up| C3(Campsite Iteration)
```

## Tech Backlog

The tech backlog is primarily maintained on the [wdwb-tech workboard](https://phabricator.wikimedia.org/project/board/3532/).

### Tech prioritization

The prioritization sessions focus around a [Google sheet](https://docs.google.com/spreadsheets/d/1Sa4x3XYqpK1v6s4HnIIKq327UVYXd38PpDyT-7PqtCo) and a fairly objective scoring system.

```mermaid
graph LR
A[Phabricator task]:::woo -->|Added to sheet & wdwb-tech board| 2(2 - Discuss state)

subgraph session [Prioritization Session]

1.0-start(1.0 - Pending):::woo -->|Discuss again| 2(2 - Discuss state)

2(2 - Discuss state) -->|Task introduced| 2a(2 - Discuss state)

2a(2 - Discuss state) -->|Task already done?|4.0(4.0 Archived)
2a(2 - Discuss state) -->|Decided we don't want to do the task|4.0[4.0 Archived]:::woo

2a(2 - Discuss state) -->|Task scored| 2b(2 - Discuss state)
2b(2 - Discuss state) -->|Decided we need to do something else first| 1.0(1.0 - Pending):::final
2b(2 - Discuss state) -->|Scoring discussed, tweaked & accepted| 3.3(3.3 - Prioritized):::mid

end

3.3(3.3 - Prioritized) -->|Makes sense to be combined with something Bigger|3.1(3.1 - Bigger Batch)
3.3(3.3 - Prioritized) -->|Estimated bigger|3.2(3.2 - Prio Bigger)

3.3(3.3 - Prioritized) -->|Picked up by a team|X1(Tackled by some team):::woo

3.1(3.1 - Bigger Batch) -->| Proposed to EMs to tackle|X2(Scheduled as a hike):::woo
3.2(3.2 - Prio Bigger) -->| Proposed to EMs to tackle|X2(Scheduled as a hike):::woo

classDef woo fill:#1de249;
classDef final fill:#f64209;
classDef mid fill:#dc8b23;
```