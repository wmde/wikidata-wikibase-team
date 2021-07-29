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
P4(DS Grooming Session) -->|Groomed & Prioritized| Backlog4(DS prioritized backlog)
Backlog4(DS prioritized backlog) -->|Pickup attempt, every 2 weeks| C2(Campsite Storytime)

C2(Campsite Storytime) -->|Estimated & picked up| C3(Campsite Iteration)
```

### Tech track

- Tech Lead will make sure the "Tech backlog" on the campsite board has appropriate ordered tasks at the top of it
- A "ticket polishing" session happens weekly with a member of the campsite to ensure the ticket makes sense and to write ACs
- The ticket is represented in a story time by the tech lead for pickup by the team
- Once picked up the task is archived from the tech prioritization system & moved to "Active" on the wdwb-tech board

## Tech Backlog

The tech backlog is primarily maintained on the [wdwb-tech workboard](https://phabricator.wikimedia.org/project/board/3532/).

### Tech prioritization

|             | Description |
| ----------- | ----------- |
| What        | A weekly 1 hour meeting to prioritize tasks.<br> Tasks are submitted, discussed, scored and sorted.<br>This assigns the responsibility of prioritising maintenance tasks to a group of dedicated, slowly rotating, people.<br>Prioritized tasks then get picked up by teams. |
| Who         | Tech lead, 1 Campsite representative, 1 Representative of each current hike. |
| Why         | The tech prioritization process was created to distribute the process of tech debt & maintenance prioritization, while incorporating views from all products. |
| Since       | June 2020 |
| Proposed    | [2020-06-16 Maintenance + Tech Debt Tackle Proposal - Focus on Prioritization](https://docs.google.com/document/d/1qpVtHoLT5lCbzNhbVpUwUtSNG6_XhM4QmN1aQoseyY0) |

Anything that is deemed to touch product / user facing things that is raised as part of the prioritization process would not be prioritized and instead handed to PMs.

#### Goals

- Team as a whole will feel more involved in prioritization
- Prioritization process will be clearer for the whole team
- Tech backlog will be more organized
- Important tech tasks will organically surface
- Knowledge sharing will happen as prioritization happens

#### Prioritization scoring

The scoring system has evolved since the process was first introduced in 2020. The current system is called WAPS.

Ultimately the score is a single number, and the backlog is sorted using that number.

The current scoring system is largely based around [RICE](https://roadmunk.com/guides/rice-score-prioritization-framework-product-management/), but with yes/no questions to build both the reach and impact values.

The WAPS Score is made up of various components:

 - Stakeholders that care about the task being done
 - Impact calculated via weighted yes no (ish) questions
 - Effort in person weeks

The formula is currently very roughly:

```
(IMPACT * STAKEHOLDERS / EFFORT) * ( effort/impact adjustment ) + ( tiny increment )
```

- effort/impact adjustment: Aims to de-prioritize larger or lower impact things
- tiny increment: Based on the session number this aims to eliminate ties (by adding some decimal places, newer wins)

#### Process

The prioritization sessions focus around a [Google sheet](https://docs.google.com/spreadsheets/d/1Sa4x3XYqpK1v6s4HnIIKq327UVYXd38PpDyT-7PqtCo) and a fairly objective scoring system.

A new sheet is created every month:

- Current "Active" sheet is copied / duplicated to an "Archive"
- Copy all cells in the "Archive" sheet and paste in past "with values"
- All comments on the Active sheet are tended to
- All archived tasks are removed from the "Active" sheet
- Larger changes are made to the scoring system

The general process for attendees of the session is outlined below:

:::details Session leader
**Before the session**
TBA

**During the session**
TBA

**After the session**
TBA
:::

:::details Session attendee
**Before the session**
TBA

**During the session**
TBA

**After the session**
TBA
:::

**A general process flow**

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

2a(2 - Discuss state) -->|Task needs product decisions / impacts users in a non positive way|N1[Notify Product]
N1[Notify Product] -->|then...|4.0(4.0 Archived)

3.3(3.3 - Prioritized) -->|Makes sense to be combined with something Bigger|3.1(3.1 - Bigger Batch)
3.3(3.3 - Prioritized) -->|Estimated bigger|3.2(3.2 - Prio Bigger)

3.3(3.3 - Prioritized) -->|Picked up by a team|X1(Tackled by some team):::woo

3.1(3.1 - Bigger Batch) -->| Proposed to EMs to tackle|X2(Scheduled as a hike):::woo
3.2(3.2 - Prio Bigger) -->| Proposed to EMs to tackle|X2(Scheduled as a hike):::woo

classDef woo fill:#1de249;
classDef final fill:#f64209;
classDef mid fill:#dc8b23;
```
